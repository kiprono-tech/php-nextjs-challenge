import {useState} from "react";
import Matrix from "../Matrix";
import InfoSection from "../InfoSection";

import {getMovements, getFinalPosition} from "../../lib/team/team-control"
import { getMaxDimension } from "../../helpers/matrix";

const HomeSection = () => {

  const [dimensionMatrix, setdimensionMatrix] = useState([4,4])
  const [movementsList, setMovements] = useState([])
  const [finalMovements, setFinalMovements] = useState([])
  const [position, setPosition] = useState({
    init: [0,0],
    final: []
  })
  const [error, setError] = useState(false)


  /* Get movements from API */
  const getMovementsHandler = async() => {
    //Reset info
    setError(false)
    setPosition({ ...position, final: [] })
    setFinalMovements([])
    try {

      //Set movements in state
      const movements = await getMovements();
      setMovements(movements)
      

    } catch (error) {
      setError(true)
    } 
  }

  /* Get FINAL position from API */
  const getFinalPositionHandler = async() => {

    //create the data body
    const data = {
      initial: [0,0],
      items_mov: movementsList.map(m =>
        Object.keys(m)[0]
       )
    }

    const response = await getFinalPosition(data)

    //Set movements and final position to graph
    setFinalMovements(response.data.movements)
    setPosition({ ...position, final: response.data.movements[response.data.movements.length - 1] })

    //If maxDimension of matrix is bigger from actual -> update
    const maxDimension = getMaxDimension(response.data.movements)
    if (maxDimension[0] > dimensionMatrix[0] && maxDimension[1] > dimensionMatrix[1])
      setdimensionMatrix([maxDimension, maxDimension])
    
  }
  
  return <>
      <h1 className="text-4xl font-bold text-center">
        Posición
      </h1>

      <Matrix 
        n={dimensionMatrix[0]} 
        m={dimensionMatrix[1]} 
        init_position={position.init}
        final_position={position.final}
        
      />

      <InfoSection 
        title="Movimientos"
        subtitle="GET /api/earth"
        onClick={getMovementsHandler}
        disabled={false}
        data={movementsList &&  movementsList.map(m =>
         Object.values(m)[0]
        )} />

      {error && <small className="text-red-600 text-center">Ups! Ha ocurrido un error!</small>}

      <InfoSection 
        title="Posición final"
        subtitle="POST /api/final-position"
        onClick={getFinalPositionHandler}
        disabled={!(movementsList && movementsList.length > 0)}
        disabled_text="Esperando los movimientos para calcular posición..."
        data={finalMovements &&  finalMovements.map(m =>
          `[${m.toString()}]`
         )}  />
  </>;

  
}

export default HomeSection;
