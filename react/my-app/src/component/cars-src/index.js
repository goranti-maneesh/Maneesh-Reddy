/*global React*/
/*global ReactDOM*/

// import React from 'react';

// function AddCar(props) {
//       return <button className="add" onClick={props.onclickFunction}>AddCar</button>
// }
// class Car extends React.Component {
//       constructor(props) {
//             super(props);
//             this.state = {
//                   status: "Stopped",
//                   speed: 0,
//             };
//       }
//       onStartOrStop() {
//             // this.state.status == "Stopped" ? this.setState = { status: "Started" } : this.setState = { status: "Stopped" };
//             this.setState = {
//                   if (status == "Stopped") {

//                   }
//             }

//       onApplyBrake() {
//             this.state.speed -= 10;
//       }
//       onAccelerate() {
//             this.state.speed += 10;
//       }
//       displayStatusText() {
//             if (this.state.status == "Stopped") {
//                   return <div>Car Status: Stopped</div>;
//             }
//             if (this.state.speed == 0) {
//                   return <div>Car Status: Running</div>;
//             }
//             if (this.state.speed > 0) {
//                   return <div>Car Status: Running with {this.state.speed}kmph</div>;
//             }
//       }
//       render() {
//             let carStatus = (this.state.status == "Stopped") ?
//                   <button onClick={this.onStartOrStop}>Start</button> :
//                   <button onClick={this.onStartOrStop}>Stop</button>;
//             return <div>
//                   <div>
//                         <p>Car: {this.props.carId}</p>
//                         <button onClick={this.props.removeCarFromCarsList(this.props.carId)}>X</button>
//                   </div>
//                   <div>{carStatus}</div>
//                   <div>
//                         <button onClick={this.onAccelerate}>Accelerate</button>
//                         <button onClick={this.onApplyBrake}>Apply Break</button>
//                   </div>
//             </div>;
//       }
// }

// class CarsList extends React.Component {
//       constructor(props) {
//             super(props);
//             this.state = {
//                   carsList: [1],
//             };
//             console.log(this.state.carsList);
//       }
//       addCarToCarsList() {
//             console.log(this.state.carsList);
//             let updatedList = this.state.carsList;
//             let carId = updatedList.length > 0 ? [updatedList.length - 1] + 1 : 1;
//             updatedList.push(carId);
//             this.state = {
//                   carsList: updatedList,
//             };
//       }
//       removeCarFromCarsList(carId) {
//             // let updatedList = this.state.carsList;
//             // let index = updatedList.indexOf(carId);
//             // console.log(index);
//             // updatedList.splice(index, 1);
//             // this.state = {
//             //       carsList: updatedList,
//             // };
//       }
//       renderCarsList() {
//             return this.state.carsList.map(id => <Car key = {id} carId = { id } removeCarFromCarsList = { this.removeCarFromCarsList } />);
//       }
//       render() {
//             console.log(this.state.carsList);
//             return <div>
//             <AddCar onclickFunction = { this.addCarToCarsList }/>
//             {this.renderCarsList()}
//             </div>;
//       }
// }

// ReactDOM.render(<CarsList />, document.getElementById("root"));


// export { CarsList, Car };

import React from 'react';

function AddCar(props) {
      return (<div>
      <button onClick={props.addCar} >Add Car</button>
      </div>);
}

class Car extends React.Component {
      constructor(props) {
            super(props);
            this.state = {
                  status: "Stopped",
                  speed: 0,
                  carPosition: "Start",
            };
            this.state.displayText = null;
      }
      startAndStop = () => {
            if (this.state.status === "Stopped") {
                  this.setState({
                        carPosition: "Stop",
                        status: "Running",
                        speed: 0
                  });
            }
            else {
                  this.setState({
                        carPosition: "Start",
                        status: "Stopped",
                        speed: 0
                  });
            }
      }
      onAccelerate = () => {
            this.setState({
                  speed: this.state.speed + 10,
            });
      }
      onDecelerate = () => {
            this.setState({
                  speed: this.state.speed - 10,
            });
      }
      displayStatusText = () => {
            if (this.state.carPosition === "Start") {
                  this.displayText = "Stopped";
            }
            else if (this.state.speed === 0) {
                  this.displayText = "Running";
            }
            else {
                  this.displayText = `Running with ${this.state.speed} kmph`;
            }
      }
      render() {
            this.displayStatusText();
            return <div>
                  <div>
                        <div>CarId {this.props.carId}</div>
                        <button onClick={()=>this.props.removeCarFromCarsList(this.props.carId)}>X</button>
                  </div>
                  <button onClick={this.startAndStop}>{this.state.carPosition}</button>
                  <div>Car Status: {this.displayText}</div>
                  <div>
                        <button onClick={this.onAccelerate} disabled={this.state.status==="Stopped"}>Accelerate</button>
                        <button onClick={this.onDecelerate} disabled={this.state.speed<=0}>Apply break</button>
                  </div>
            </div>;
      }
}


class CarsList extends React.Component {
      constructor(props) {
            super(props);
            this.state = {
                  carsList: [1],
            };
      }
      addCarToCarsList = () => {
            let updatedList = this.state.carsList;
            let addedCar = updatedList.length > 0 ? updatedList[updatedList.length - 1] + 1 : 1;
            updatedList.push(addedCar);
            this.setState({ carsList: updatedList });
      }
      removeCarFromCarsList = (carId) => {
            let removeCar = this.state.carsList;
            let index = removeCar.indexOf(carId);
            removeCar.splice(index, 1);
            this.setState({ carsList: removeCar });
      }
      renderCarsList = () => {
            return this.state.carsList.map(id =>
                  <Car carId={id} removeCarFromCarsList={this.removeCarFromCarsList}/>);
      }
      render() {
            return (
                  <div>
            <AddCar addCar = {this.addCarToCarsList}/>
            { this.renderCarsList() } 
            </div>
            );
      }

}

export { CarsList, Car };
//key={id.toString()}
