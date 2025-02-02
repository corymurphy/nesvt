const Runs = ({ runs }) => {
  return (
    <>
      <hr className="style1 mb-0" />
      <div className="row row-cols-auto">
        {runs.map((run, key) => (
          <div key={key + 1} className="col">
            <p className="card-text">
              <b>{key + 1}</b>: {run.display}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Runs;
