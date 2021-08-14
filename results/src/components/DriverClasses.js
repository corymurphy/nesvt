
import DriverClass from "./DriverClass"



const DriverClasses = (props) => {

    // {
    //     props.results.class && props.selectedDriverClass != "all" ?
    //     console.log("dongs!",Object.values(props.results.class).filter(
    //         item => item.alias === props.selectedDriverClass)) : console.log("meh")
    // }

    return (
        <>
            {props.results.hasOwnProperty("class") && props.selectedDriverClass === "all" ?
                Object.values(props.results.class).map((item, i) =>
                    <DriverClass
                        key={i}
                        driverClass={item}
                        drivers={props.results.drivers}
                        selectedDriverClass={props.selectedDriverClass}
                    />
                ) :
                props.results.hasOwnProperty("class") ?
                    <DriverClass
                        key={0}
                        driverClass={Object.values(props.results.class).filter(
                            driverClass => driverClass.alias === props.selectedDriverClass)[0]}
                        drivers={props.results.drivers}
                        selectedDriverClass={props.selectedDriverClass}
                    /> :
                    console.log("No results")}
        </>
    )
}

export default DriverClasses
