import { useState } from "react";
import { Button, Collapse } from "react-bootstrap";

import { countRuns, latestRun } from "../util";
import Runs from "./Runs";

const Driver = (props: any) => {
  const [open, setOpen] = useState(false);

  return (
    <div key={props.position + 1} className="container-fluid">
      <div className="card w-100 border-darkmode mt-2">
        <div className="row g-3 align-items-center">
          <div className="col-1 d-flex justify-content-center">
            <h4 className="driverPosition">
              {props.position !== null && props.position
                ? props.position
                : props.driver.position}
            </h4>
          </div>
          <div className="col-4">
            <div key={props.position + 1} className="row">
              <h5 className="card-title">{props.driver.name}</h5>
            </div>
            <div className="row">
              <p className="card-text">
                #{props.driver.number} {props.driver.subClass?.toUpperCase()}
              </p>
            </div>
            <div className="row">
              <p className="card-text">{props.driver.car}</p>
            </div>
          </div>
          <div className="col-4">
            <div className="row">
              <p className="card-text">Fastest Run:</p>
            </div>
            <div className="row">
              <p className="card-text">
                <b>{props.driver.runDisplay}</b>
              </p>
            </div>
            <div className="row">
              <p className="card-text">Last Run:</p>
            </div>
            <div className="row">
              <p className="card-text">
                <b>{latestRun(props.driver.runs)}</b>
              </p>
            </div>
          </div>
          <div className="col-2 p-2">
            <div className="row text-center">
              <p className="card-text">
                Runs: <b>{countRuns(props.driver.runs)}</b>
              </p>
            </div>
            <div className="row">
              <Button
                variant="outline-primary timesButton"
                className="text-nowrap timesButton"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
              >
                Show All
              </Button>
            </div>
          </div>
        </div>

        {/* <Collapse in={open}  variant="px-2"> */}
        <Collapse in={open}>
          <div className="px-2">
            <Runs runs={props.driver.runs} />
          </div>
        </Collapse>
      </div>
    </div>
  );
};

export default Driver;
