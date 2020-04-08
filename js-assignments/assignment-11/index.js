let addCar = document.createElement("div");
addCar.innerHTML = "Add Car";
document.body.appendChild(addCar);
addCar.onclick = () => {
    let i = 0;
    let startAndStopButton = document.getElementById("startAndStopButton");
    let speedStatus = document.getElementById("speedStatus");
    let accelerateButton = document.getElementById("accelerateButton");
    let decelerateButton = document.getElementById("decelerateButton");


    class car {
        constructor() {
            this.carState = "stopped";
            this.carSpeed = 0;
        }
        start() {
            console.log(3);
            this.carState = "started";
            updateUI("started");
        }
        stop() {
            this.carState = "stopped";
            updateUI("stopped");
        }
        accelerator() {
            if (this.carState === "started") {
                this.carSpeed += 10;
                updateSpeed("accelerator", this.carSpeed);
            }
        }
        breaks() {
            if (this.carState === "started" && this.carSpeed > 0) {
                this.carSpeed -= 10;
                updateSpeed("decelerate", this.carSpeed);
            }
        }
    }


    let carStatus = new car;


    startAndStopButton.onclick = () => {
        console.log(1);
        if (i % 2 == 0) {
            console.log(2);
            carStatus.start();
            i += 1;
        }
        else {
            carStatus.stop();
            i += 1;
        }
    };
    accelerateButton.onclick = () => {
        carStatus.accelerator();
    };
    decelerateButton.onclick = () => {
        carStatus.breaks();
    };


    let updateUI = (state) => {
        switch (state) {
            case 'started':
                startAndStopButton.style.backgroundColor = "red";
                speedStatus.innerHTML = " Running";
                accelerateButton.disabled = false;
                accelerateButton.style.backgroundColor = "#0080ff";
                break;
            case 'stopped':
                startAndStopButton.style.backgroundColor = "green";
                speedStatus.innerHTML = " Stopped";
                accelerateButton.disabled = true;
                decelerateButton.disabled = true;
                accelerateButton.style.backgroundColor = "grey";
                decelerateButton.style.backgroundColor = "grey";
                break;
            default:
                throw Error("invalid value");
        }
    };



    let updateSpeed = (state, speed) => {
        switch (state) {
            case 'accelerator':
                speedStatus.innerHTML = ` Running with speed ${speed}kmph`;
                decelerateButton.disabled = false;
                decelerateButton.style.backgroundColor = "#0080ff";
            case 'decelerate':
                if (speed > 0) {
                    speedStatus.innerHTML = ` Running with speed ${speed}kmph`;
                }
                else {
                    speedStatus.innerHTML = "Running";
                    decelerateButton.disabled = true;
                    decelerateButton.style.backgroundColor = "grey";
                }
        }
    };
};


/*class car {
    constructor() {}

    carStart() {
        startAndStopButton.style.backgroundColor = "red";
        speedStatus.innerHTML = " Running";
        accelerateButton.disabled = false;
        accelerateButton.style.backgroundColor = "#0080ff";
    }
 
    carStop() {
        startAndStopButton.style.backgroundColor = "green";
        speedStatus.innerHTML = " Stopped";
        accelerateButton.disabled = true;
        decelerateButton.disabled = true;
        accelerateButton.style.backgroundColor = "grey";
        decelerateButton.style.backgroundColor = "grey";
        speed = 0;
    }

    carAccelerator() {
        speed += 10;
        speedStatus.innerHTML = ` Running with speed ${speed}kmph`;
        decelerateButton.disabled = false;
        decelerateButton.style.backgroundColor = "#0080ff";
    }

    carDecelerator() {
        speed -= 10;
        if (speed > 0) {
            speedStatus.innerHTML = ` Running with speed ${speed}kmph`;
        }
        else {
            speedStatus.innerHTML = "Running";
            decelerateButton.disabled = true;
            decelerateButton.style.backgroundColor = "grey";
        }
    }

}



let carStatus = new car();

startAndStopButton.onclick = () => {
    if (i % 2 == 0) {
        carStatus.carStart();
    }
    else {
        carStatus.carStop();
    }
    i += 1;
};

accelerateButton.onclick = () => {
    carStatus.carAccelerator();
};

decelerateButton.onclick = () => {
    carStatus.carDecelerator();
};
*/
