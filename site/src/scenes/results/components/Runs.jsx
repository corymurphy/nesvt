const Runs = ({ runs, fastestRunInfo }) => {
  return (
    <>
      <hr className="style1 mb-0" />
      <div className="row row-cols-auto">
        {runs.map((run, key) => (
          <div key={key + 1} className="col">
            <p className="card-text">
              <b>{key + 1}</b>:{" "}
              {key + 1 === fastestRunInfo.number ? (
                <span className={"text-success"}>
                  <b>{run.display}</b>
                </span>
              ) : (
                <span>{run.display}</span>
              )}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Runs;
