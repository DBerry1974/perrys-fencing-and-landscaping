const CountyPostcodes = ({ countyName, postcodes }) => {
  return (
    <div className="bg-black">
      <h2>{countyName} Areas Covered:</h2>
      <ul>
        {postcodes.map((postcode, index) => (
          <li key={`${countyName}-${index}`}>{postcode}</li>
        ))}
      </ul>
    </div>
  );
};

export default CountyPostcodes;
