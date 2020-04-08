let waterGlassOne = document.getElementById("waterGlassOne");
let waterGlassTwo = document.getElementById("waterGlassTwo");
let waterGlassThree = document.getElementById("waterGlassThree");
let waterGlassFour = document.getElementById("waterGlassFour");
let waterGlassFive = document.getElementById("waterGlassFive");
let waterGlassSix = document.getElementById("waterGlassSix");
let waterGlassSeven = document.getElementById("waterGlassSeven");
let waterGlassEight = document.getElementById("waterGlassEight");
let upperTank = document.getElementById("upperTank");
let lowerTank = document.getElementById("lowerTank");
let upperTankRemainingCapacity = document.getElementById("upperTankRemainingCapacity");
let remained = document.getElementById("remained");
let i;
let waterGlassValueOne;
let returnValuesFromWaterGlassFu;
let styleBackground;
let styleColor;

let waterGlass = [waterGlassOne, waterGlassTwo, waterGlassThree, waterGlassFour, waterGlassFive, waterGlassSix, waterGlassSeven, waterGlassEight];

let waterGlassObject = {

    waterGlassOne: {
        waterGlassValueOne: waterGlassOne.onclick = () => {
            waterGlassFunction(1);
            upperTankRemainingCapacity.innerHTML = "1.75L".bold();
            lowerTank.innerHTML = "12.5%".bold();
        }
    },

    waterGlassTwo: waterGlassTwo.onclick = () => {
        waterGlassFunction(2);
        upperTankRemainingCapacity.innerHTML = "1.50L".bold();
        lowerTank.innerHTML = "25%".bold();
    },

    waterGlassThree: waterGlassThree.onclick = () => {
        waterGlassFunction(3);
        upperTankRemainingCapacity.innerHTML = "1.25L".bold();
        lowerTank.innerHTML = "37.5%".bold();
    },

    waterGlassFour: waterGlassFour.onclick = () => {
        waterGlassFunction(4);
        upperTankRemainingCapacity.innerHTML = "1.00L".bold();
        lowerTank.innerHTML = "50%".bold();
    },

    waterGlassFive: waterGlassFive.onclick = () => {
        waterGlassFunction(5);
        upperTankRemainingCapacity.innerHTML = "0.75L".bold();
        lowerTank.innerHTML = "62.5%".bold();
    },

    waterGlassSix: waterGlassSix.onclick = () => {
        waterGlassFunction(6);
        upperTankRemainingCapacity.innerHTML = "0.50L".bold();
        lowerTank.innerHTML = "75%".bold();
    },

    waterGlassSeven: waterGlassSeven.onclick = () => {
        waterGlassFunction(7);
        upperTankRemainingCapacity.innerHTML = "0.25L".bold();
        lowerTank.innerHTML = "87.5%".bold();
    },

    waterGlassEight: waterGlassEight.onclick = () => {
        waterGlassFunction(8);
        upperTankRemainingCapacity.innerHTML = "";
        lowerTank.innerHTML = "100%".bold();
    },

};


let waterGlassFunction = (noOfMugs) => {
    for (i = 0; i < 8; i++) {

        if (i < noOfMugs) {
            waterGlass[i].style.backgroundColor = "skyblue";
            waterGlass[i].style.color = "white";
        }
        else {
            waterGlass[i].style.backgroundColor = "white";
            waterGlass[i].style.color = "#1da1f2";
        }
    }
    if (noOfMugs === 8) {
        remained.innerHTML = "";
    }
    else {
        remained.innerHTML = "remained";
    }
    upperTank.style.height = eval("300-(37.5*noOfMugs)") + "px";
    lowerTank.style.height = eval("37.5*noOfMugs") + "px";

    // returnValuesFromWaterGlassFu = {

    // }
};

let myStorage = window.localStorage.setItem(waterGlassOne, JSON.stringify(waterGlassValueOne));
//let myResult = window.localStorage.getItem(waterGlassOne);
// window.localStorage.clear();
window.localStorage.setItem("name", "Maneesh");
console.log(localStorage);

export { waterGlassObject };
