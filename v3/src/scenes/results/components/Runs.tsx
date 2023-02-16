import { displayRun } from "../util.js"

const Runs = ({runs}) => {
    return (
    <>
        <hr className="style1 mb-0" />
        <div className="row row-cols-auto">
            {runs.filter(function(run: any){return run.time !== null && run.time !== ''}).map((run: any, key: any) => (
                <div className="col">
                    <p className="card-text"><b>{key+1}</b>: {displayRun(run)}</p>
                </div>
            ))}
        </div>
    </>
    )
}

export default Runs
