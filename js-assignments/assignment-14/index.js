let addCar = document.getElementById("addCar");

addCar.onclick = () => {
      let i = 0;
      let speed = 0;
      let startAndStopButton = document.createElement("div");
      let accelerateButton = document.createElement("div");
      let decelerateButton = document.createElement("div");
      let carStatus = document.createElement("div");
      let divForSpeed = document.createElement("div");
      let divForSpeedbreak = document.createElement("div");
      let mainDiv = document.createElement("div");
      let carStatusIndicator = document.createElement("div");

      startAndStopButton.className = "start-stop-button";
      accelerateButton.className = "accelerate-button";
      decelerateButton.className = "decelerate-button";
      divForSpeedbreak.className = "div-for-speed-break";
      carStatusIndicator.className = "car-status-indicator";
      mainDiv.className = "main-div";

      document.body.appendChild(startAndStopButton);
      document.body.appendChild(carStatusIndicator);
      document.body.appendChild(accelerateButton);
      document.body.appendChild(decelerateButton);
      document.body.appendChild(divForSpeed);
      document.body.appendChild(carStatus);
      document.body.appendChild(mainDiv);
      document.body.appendChild(divForSpeedbreak);

      divForSpeedbreak.appendChild(accelerateButton);
      divForSpeedbreak.appendChild(decelerateButton);
      mainDiv.appendChild(startAndStopButton);
      mainDiv.appendChild(carStatusIndicator);
      mainDiv.appendChild(divForSpeedbreak);
      carStatusIndicator.appendChild(carStatus);
      carStatusIndicator.appendChild(divForSpeed);

      startAndStopButton.innerHTML = "Start";
      carStatus.innerHTML = "Car status: ";
      divForSpeed.innerHTML = "Stopped";
      accelerateButton.innerHTML = "Accelerate";
      decelerateButton.innerHTML = "Decelerate";

      //startAndStopButton.style.backgroundColor = "green";
      decelerateButton.style.pointerEvents = "none";
      accelerateButton.style.pointerEvents = "none";

      class car {
            constructor() {
                  this.carStatus = "Stopped";
                  this.carColor = "green";
            }
            start() {
                  startButtonOperation();
            }
            stop() {
                  stopButtonOperation();
            }
            accelerate() {
                  increaseSpeed();
            }
            decelerate() {
                  decreaseSpeed();
            }
      }

      let myCar = new car;


      startAndStopButton.onclick = () => {
            startAndStop();
      };
      accelerateButton.onclick = () => {
            myCar.accelerate();
      };
      decelerateButton.onclick = () => {
            myCar.decelerate();
      };

      let startAndStop = () => {
            if (i % 2 == 0) {
                  startAndStopButton.innerHTML = "Stop";
                  myCar.start();
                  i += 1;
            }
            else {
                  startAndStopButton.innerHTML = "Start";
                  myCar.stop();
                  i += 1;
            }
      };

      let startButtonOperation = () => {
            startAndStopButton.style.backgroundColor = "red";
            divForSpeed.innerHTML = "Running";
            accelerateButton.style.backgroundColor = "#008ae6";
            decelerateButton.style.backgroundColor = "lightgrey";
            accelerateButton.style.pointerEvents = "auto";
            decelerateButton.style.pointerEvents = "none";
      };

      let stopButtonOperation = () => {
            startAndStopButton.style.backgroundColor = "green";
            divForSpeed.innerHTML = "Stopped";
            accelerateButton.style.backgroundColor = "lightgrey";
            decelerateButton.style.backgroundColor = "lightgrey";
            accelerateButton.style.pointerEvents = "none";
            decelerateButton.style.pointerEvents = "none";
            speed = 0;
      };

      let increaseSpeed = () => {
            speed += 10;
            divForSpeed.innerHTML = `Running with speed ${speed}kmph`;
            if (speed > 0) {
                  decelerateButton.style.backgroundColor = "#008ae6";
                  accelerateButton.style.pointerEvents = "auto";
                  decelerateButton.style.pointerEvents = "auto";
            }
            else {
                  decelerateButton.style.backgroundColor = "lightgrey";
                  accelerateButton.style.pointerEvents = "auto";
                  decelerateButton.style.pointerEvents = "none";
            }
      };

      let decreaseSpeed = () => {
            speed -= 10;
            if (speed > 0) {
                  divForSpeed.innerHTML = `Running with speed ${speed}kmph`;
                  accelerateButton.style.pointerEvents = "auto";
                  decelerateButton.style.pointerEvents = "auto";
            }
            else {
                  decelerateButton.style.backgroundColor = "lightgrey";
                  accelerateButton.style.pointerEvents = "auto";
                  decelerateButton.style.pointerEvents = "none";
                  divForSpeed.innerHTML = "Running";
                  speed = 0;
            }
      };
};
