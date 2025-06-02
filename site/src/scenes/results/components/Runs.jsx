const Runs = ({ runs, fastestRunInfo }) => {
  return (
    <>
      <hr className="style1 mb-0" />
      <div className="row row-cols-auto">
        {runs.map((run, key) => (
          <div key={key + 1} className="col">
            <p className="card-text">
              <b>{key + 1}</b>:{" "}
              <span
                className={
                  key + 1 === fastestRunInfo.number ? "text-success" : ""
                }
              >
                {run.display}
              </span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Runs;
