import { displayRun } from "../../global/util.js"

const Runs = ({runs}) => {
    return (
    <>
        <hr className="style1 mb-0" />
        <div className="row row-cols-auto">
            {runs.filter(function(run){return run.time !== null && run.time !== ''}).map((run, key) => (
                <div className="col">
                    <p className="card-text"><b>{key+1}</b>: {displayRun(run)}</p>
                </div>
            ))}
        </div>
    </>
    )
}

export default Runs
