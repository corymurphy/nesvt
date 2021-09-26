import { sortByFastest, sortByCarNumber } from "../util";
import Driver from "./Driver"
import DriverClasses from './DriverClasses';

const ResultsSorter = (props) => {

    function isTime(props) {
        if(props.selectedSortBy === "time" && props.results.hasOwnProperty('drivers')) {
            return true
        } else {
            return false
        }
    }

    function isNumber(props) {
        if(props.selectedSortBy === "number" && props.results.hasOwnProperty('drivers')) {
            return true
        } else {
            return false
        }
    }

    return (
        <>
            {console.log(props.results)}
            {props.selectedSortBy === "class" &&
                <DriverClasses
                    results={props.results}
                    selectedDriverClass={props.selectedDriverClass}
                    selectedDriver={props.selectedDriver}
                    clearButtonPressed={props.clearButtonPressed}
                />
            }

            {isTime(props) &&
                <div className="container pt-4">
                    {props.results.drivers.sort(sortByFastest).map((driver, position) =>
                        
                        <Driver
                            driver={driver}
                            position={position+1}/>
                    )}
                </div>
            }


            {isNumber(props) &&
                <div className="container pt-4">
                    {props.results.drivers.sort(sortByCarNumber).map((driver, position) =>
                        
                        <Driver
                        driver={driver}
                        position={position+1}
                        />
                    )}
                </div>
            }
        </>
    )
}

export default ResultsSorter
