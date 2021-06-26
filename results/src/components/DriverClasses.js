
import DriverClass from "./DriverClass"

const DriverClasses = ({results}) => {
    return (
        <>
            {results.hasOwnProperty("class") ? Object.values(results.class).map((item, i) =>
                <DriverClass key={i} driverClass={item} drivers={results.drivers}/>
            ) : "No results."}
        </>
    )
}

export default DriverClasses
