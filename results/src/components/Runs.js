import { displayRun } from "../util.js"

const Runs = ({runs}) => {
    return (
    <>
        <hr class="style1 mb-0" />
        <div class="row row-cols-auto">
            {runs.filter(function(run){return run.time !== null && run.time !== ''}).map((run, key) => (
                <div class="col">
                    <p class="card-text"><b>{key+1}</b>: {displayRun(run)}</p>
                </div>
            ))}
        </div>
    </>
    )
}

export default Runs
