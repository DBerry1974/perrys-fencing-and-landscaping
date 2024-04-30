const CountyTowns = ({ countyName, towns }) => {
  return (
    <div className="bg-black p-4">
      <h2 className="text-2xl font-bold mb-4">We cover the following {countyName} Towns:</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {towns.map((town, index) => (
          <div key={`${countyName}-${index}`} className="bg-white p-2 rounded-md shadow-md">
            <p className="text-lg font-medium">{town}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountyTowns;
