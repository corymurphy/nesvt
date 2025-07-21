import { sortByFastest, sortByCarNumber } from "../util";
import Driver from "./Driver";
import DriverClasses from "./DriverClasses";

const ResultsSorter = (props) => {
  function isTime(props) {
    if (
      props.selectedSortBy === "time" &&
      props.results.hasOwnProperty("drivers")
    ) {
      return true;
    } else {
      return false;
    }
  }

  function isNumber(props) {
    if (
      props.selectedSortBy === "number" &&
      props.results.hasOwnProperty("drivers")
    ) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div style={{ paddingBottom: "200px" }}>
      {/* {console.log(props.results)} */}
      {props.selectedSortBy === "class" && (
        <DriverClasses
          //   key={position + 1}
          results={props.results}
          selectedDriverClass={props.selectedDriverClass}
          selectedDriver={props.selectedDriver}
          clearButtonPressed={props.clearButtonPressed}
        />
      )}

      {isTime(props) && (
        <div className="container pt-4">
          {props.results.drivers.sort(sortByFastest).map((driver, position) => (
            <Driver
              key={position + 1}
              driver={driver}
              position={position + 1}
              sortedByTime
            />
          ))}
        </div>
      )}

      {isNumber(props) && (
        <div className="container pt-4">
          {props.results.drivers
            .sort(sortByCarNumber)
            .map((driver, position) => (
              <Driver
                key={position + 1}
                driver={driver}
                position={position + 1}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default ResultsSorter;
