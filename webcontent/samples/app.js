// everything that creates html elements to populate the page with driver/class data goes in this file?
// we'll need to sort the driver data by class then position, and then can populate the page
// need to make a dictionary that contains all of the class abbreviations and their corresponding full name

// function that creates driver cards given a *sorted* dictionary of drivers in a given car class
// the dictionary should also have a "fastest time" flag or something
// this iterator nonsense doesn't need to exist, need to remove it
let addDriverCard = (drivers, iterator) => {
    // function to populate driver card info after their name
    let populateDriverCard = (value) => {
        let driverValueDiv = document.createElement("div");
        driverValueDiv.className = "row";
        let driverValue = document.createElement("p");
        driverValue.className = "card-text";
        // check if input value is a number or has a + sign (penalty), make it bold if so
        if (value.indexOf("+") > 2 || parseInt(value)) {
            let boldTag = document.createElement("b");
            boldTag.innerText = `${value}`;
            driverValue.insertAdjacentElement("afterbegin", boldTag);
        }
        else {
            driverValue.innerText = `${value}`;
        }
        driverValueDiv.insertAdjacentElement("beforeend", driverValue);
        driverInfo.insertAdjacentElement("beforeend", driverValueDiv);

        return driverValueDiv;
    }

    for (let driver in drivers) {
        let parentCard = document.createElement("div");
        parentCard.className = "card w-100 border-success mt-2";
        parentCard.setAttribute("id", `class${iterator}driver${driver.position}`);
        let topRow = document.createElement("div");
        topRow.className = "row g-3 align-items-center";
        parentCard.insertAdjacentElement("afterbegin", topRow);
        let driverPosDiv = document.createElement("div");
        topRow.insertAdjacentElement("afterbegin", driverPosDiv);
        let driverPos = document.createElement("h4");
        driverPos.className = "driverPosition";
        driverPos.innerText = `${driver.position}`
        driverPosDiv.insertAdjacentElement("afterbegin", driverPos);
        let driverInfo = document.createElement("div");
        driverInfo.className = "col-4";
        topRow.insertAdjacentElement("beforeend", driverInfo);
        // driver's name
        let driverNameDiv = document.createElement("div");
        driverNameDiv.className = "row";
        driverInfo.insertAdjacentElement("beforeend", driverNameDiv);
        let driverName = document.createElement("h5");
        driverName.className = "card-title";
        driverName.innerText = `${driver.name}`;
        driverNameDiv.insertAdjacentElement("beforeend", driverName);

        // driver's number (need to add the driver's number to results.json)
        let driverNum = populateDriverCard(driver.number);
        driverInfo.insertAdjacentElement("beforeend", driverNum);

        // driver's car
        let driverCar = populateDriverCard(driver.car);
        driverInfo.insertAdjacentElement("beforeend", driverCar);

        // driver's times
        let driverTimes = document.createElement("div");
        driverTimes.className = "col-4";
        topRow.insertAdjacentElement("beforeend", driverTimes);

        // fastest run
        let fastestRunText = populateDriverCard("Fastest Run:");
        driverTimes.insertAdjacentElement("beforeend", fastestRunText);
        let fastestRunTime = populateDriverCard(driver.bestrun);
        driverTimes.insertAdjacentElement("beforeend", fastestRunTime);

        // last run
        let lastRunText = populateDriverCard("Last Run:");
        driverTimes.insertAdjacentElement("beforeend", lastRunText);
        let lastRunTime = populateDriverCard(driver.lastrun);
        driverTimes.insertAdjacentElement("beforeend", lastRunTime);

        // show all runs button
        


    }
}

// function that creates car class group and appends it to page. should do the following:
// add car class header to page (car class name + number of drivers)
// create the container for that car class (which will contain all the driver cards in that class)
// add the car class name to the class menu in the navbar
let addCarClass = (classNameAbbrev, classNameFull, numDrivers, iterator, classDriversDict) => {
    // create car class header
    let headerParent = document.createElement("div");
    headerParent.className = "container pt-4";
    let headerRow = document.createElement("div");
    headerRow.className = "row";
    let headerClassColumn = document.createElement("div");
    headerClassColumn.className = "col-sm-8";
    let headerClassTitle = document.createElement("button");
    headerClassTitle.className = "btn";
    headerClassTitle.setAttribute("type", "button");
    headerClassTitle.setAttribute("data-bs-toggle", "collapse");
    headerClassTitle.setAttribute("data-bs-target", `#classList${iterator}`);
    headerClassTitle.setAttribute("aria-expanded", "true");
    headerClassTitle.setAttribute("aria-controls", `collapseClassList${iterator}`);
    let classTitle = document.createElement("h3");
    classTitle.innerText = `${classNameAbbrev} - ${classNameFull}`;
    headerClassDriverCount = document.createElement("div");
    headerClassDriverCount.className = "col-sm-4 text-muted align-self-center"
    let driverCount = document.createElement("h4");
    driverCount.innerText = `${numDrivers} Drivers`;
    headerParent.insertAdjacentElement("afterbegin", headerRow);
    headerRow.insertAdjacentElement("afterbegin", headerClassColumn);
    headerClassColumn.insertAdjacentElement("afterbegin", headerClassTitle);
    headerClassTitle.insertAdjacentElement("afterbegin", classTitle);
    headerClassDriverCount.insertAdjacentElement("afterbegin", driverCount);
    headerClassColumn.insertAdjacentElement("afterend", headerClassDriverCount);

    // add car class header to the DOM
    let topPageElement = document.getElementById("mainNavBar");
    topPageElement.insertAdjacentElement("afterend", headerParent);

    // add car class to navbar menu
    let topListElement = document.getElementById("navbarClassSelector");
    let newClassParent = document.createElement("li");
    let newClassChild = document.createElement("a");
    newClassChild.className = "dropdown-item";
    newClassChild.setAttribute("href", "#");
    newClassChild.innerText = `${classNameAbbrev}`;
    newClassParent.insertAdjacentElement("beforeend", newClassChild);
    topListElement.insertAdjacentElement("afterbegin", newClassParent);

    // create car class container for driver cards
    let classCardContainer = document.createElement("div");
    classCardContainer.className = "collapse show";
    classCardContainer.setAttribute("id", `classList${iterator}`);
    let classCardFluid = document.createElement("div");
    classCardFluid.className = "container-fluid";
    classCardFluid.setAttribute("id", `class${iterator}`);
    classCardContainer.insertAdjacentElement("afterbegin", classCardFluid);

    // call to function that creates/adds the driver cards for this class from classDriversDict

}