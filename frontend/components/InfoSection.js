const InfoSection = ({title, subtitle, onClick, data, disabled, disabled_text}) => {
  
  return <section className="my-4">
      <h1 className="text-4xl font-bold">
        {title}
      </h1>
      {disabled ?
          <p className="text-red-700 text-base mt-2">{disabled_text}</p> :
          <>
            <div className="flex space-x-4 max-w-4xl mt-6 sm:w-full">
              <h3>{subtitle}</h3>
              <button 
                className="px-4 text-white bg-green-800 border-l"
                onClick={onClick}
                disabled={disabled}
                >
                Obtener
              </button>
            </div>

            <div className="flex">
            {data && data.length > 0 && data.map((d, key) => (
                <div className="p-6 mt-2 text-left border rounded-xl hover:text-blue-600 focus:text-blue-600 w-full" key={key}>
                  {d}
                </div>

                ))}
            </div>
        </>
      }
      
  </section>;

  
}

export default InfoSection;
