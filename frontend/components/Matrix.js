import { isPosition } from "../helpers/matrix";

const Matrix = ({n, m, init_position, final_position}) => {
  
  return  <section className="my-4 flex flex-col space-y-4">
            <table className="table-fixed border border-black border-collapse w-4/5 mx-24">
              <tbody className="divide-y divide-gray-400">
                {Array(n).fill(null).map((vi, i) => (
                  <tr key={`${i}`}>
                    {Array(m).fill(null).map((vj, j) => (
                      <td key={`${j}-${i}`} className={`${isPosition(init_position, i, j) ? 'bg-green-500 text-white' : ''}
                                        ${isPosition(final_position, i, j) ? 'bg-red-500 text-white' : ''}
                                       text-center border border-black p-4`}>({i}, {j})</td>
                    ))}      
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex space-x-4 items-center text-center justify-center">
              <div className="flex  items-center space-x-2"><b>Posición inicial</b><div className="md:w-5 md:h-5 h-4 w-4 rounded-full bg-green-500"/></div>
              <div className="flex  items-center space-x-2"><b>Posición final</b><div className="md:w-5 md:h-5 h-4 w-4 rounded-full bg-red-500"/></div>
            </div>
          </section>;

  
}

export default Matrix;