import { useState } from 'react'
import { Collapse, Button } from 'react-bootstrap'

import Runs from './Runs'

const Driver = ({driver}) => {

    const [open, setOpen] = useState(false);

    const countRuns = (runs) => {
        return runs.filter((run) => {
            return run.time !== null && run.time !== ''
        }).length
    }

    const displayRun = (run) => {

    }

    // TODO: figure this out
    const latestRun = (runs) => {
        var latest = ""
        runs.forEach((run, index, runs) => {
            if (index+1 > runs.length) {
                latest = run.time
            }
            // if (runs[index+1])
        })
        return latest;
    }
    
    const fastestRun = (runs) => {
        var fastest = 999.999;
        runs.forEach((run, index, runs) => {
            var current = parseFloat(run.time)
            // TODO: check if the run is valid (ie not dnf)
            if (current < fastest && !run.dnf) {
                fastest = current;
            }
        })
        return fastest
    }
    
    return (
        <div class="container-fluid">
            <div class="card w-100 border-success mt-2" >
                <div class="row g-3 align-items-center">
                    <div class="col-1 d-flex justify-content-center">
                        <h4 class="driverPosition">{driver.position}</h4>
                    </div>
                    <div class="col-4">
                        <div class="row">
                            <h5 class="card-title">{driver.name}</h5>
                        </div>
                        <div class="row">
                            <p class="card-text">#{driver.number}</p>
                        </div>
                        <div class="row">
                            <p class="card-text">{driver.car}</p>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="row">
                            <p class="card-text">Fastest Run:</p>
                        </div>
                        <div class="row">
                            <p class="card-text"><b>{fastestRun(driver.runs)}</b></p>
                        </div>
                        <div class="row">
                            <p class="card-text">Last Run:</p>
                        </div>
                        <div class="row">
                            <p class="card-text"><b>{latestRun(driver.runs)}</b></p>
                        </div>
                    </div>
                    <div class="col-2 p-2">
                        <div class="row text-center">
                            <p class="card-text">Runs: <b>{countRuns(driver.runs)}</b></p>
                        </div>
                        <div class="row">
                        <Button variant="outline-primary" class="text-nowrap timesButton" onClick={() => setOpen(!open)} aria-expanded={open}>
                            Show All
                        </Button>
                        </div>
                    </div>
                </div>
            </div>

            <Collapse in={open}>
                <div><Runs runs={driver.runs}/></div>
            </Collapse>
            
        </div>
    )
}

export default Driver
