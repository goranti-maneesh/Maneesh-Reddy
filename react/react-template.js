/*global ReactDOM*/
/*global React*/
// function Clock(pro) {
//       return <div>
//         <h1>Hello Manikanta!</h1>
//         <h1>It is {pro.date.toLocaleTimeString()}.</h1>
//       </div>;
// }
// console.log("1");

// function bickk() {
//       ReactDOM.render(<Clock date={new Date()} />, document.getElementById("root"));
// }
// setInterval(bickk, 1000);

// class Clock extends React.Component {
//       render() {
//             return <div>
//             <h1>Hello World!</h1>
//             <h1>It is {this.props.date.toLocaleTimeString()}</h1>
//             </div>;
//       }
// }

// function tick() {
//       ReactDOM.render(<Clock date = {new Date()}/>, document.getElementById("root"));
// };

// setInterval(tick, 1000);


// class Clock extends React.Component {
//       constructor(props) {
//             super(props);
//             this.state = { date: new Date(), name: "Maneesh" };
//       }
//       render() {
//             return <div>
//             <h1>Hello {this.state.name}!</h1>
//             <h1>it is {this.state.date.toLocaleTimeString()}</h1>
//             </div>;
//       }
// }

// function tick() {
//       ReactDOM.render(<Clock/>, document.getElementById("root"));
// }

// setInterval(tick, 1000);



// class Clock extends React.Component {
//       constructor(prop) {
//             super(prop)
//             console.log(1);

//             this.state = {
//                   date: new Date(),
//                   name: "World",
//                   counter: 4,
//             };
//       }
//       componentDidMount() {
//             console.log(3);
//             this.setTime = setInterval(() => {
//                   this.tick();
//             }, 1000);
//       }
//       ComponentWillUnmount() {
//             console.log(5);
//             clearInterval(this.setTime);
//       }
//       tick() {
//             console.log(4);
//             this.setState({
//                   date: new Date(),
//                   name: "Maneesh",
//             });
//             this.setState((state, prop) => ({
//                   counter: state.counter + prop.increment,
//             }));
//       }
//       render() {
//             console.log(2);
//             return (<div>
//                         <h1>Hello {this.state.name}!</h1>
//                         <h1>It is {this.state.date.toLocaleTimeString()}.</h1>
//                         <h1>{this.state.counter}</h1>
//                   </div>);
//       }
// }


// ReactDOM.render(<Clock increment = {2} />, document.getElementById("root"));
// const id = document.getElementById("root");
// console.log(id);



// class Clock extends React.Component {
//       constructor(props) {
//             super(props);
//             this.state = { date: new Date(), name: "Hello", };
//       }

//       componentDidMount() {
//             this.timerID = setInterval(
//                   () => this.tick(),
//                   1000
//             );
//       }

//       componentWillUnmount() {
//             clearInterval(this.timerID);
//       }

//       tick() {
//             this.setState({
//                   date: new Date(),
//                   name: "Maneesh",
//             });
//       }

//       render() {
//             return (
//                   <div>
//         <h1>Hello, {this.state.name}!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//             );
//       }
// }

// ReactDOM.render(
//       <Clock />,
//       document.getElementById('root')
// );




// function ActivateFirst() {
//       function activateSecond() {
//             console.log("Maneesh");
//             return "Maneesh";
//       }
//       return <div onClick={activateSecond}>click</div>;
// }
// ReactDOM.render(<ActivateFirst/>, document.getElementById("root"));




// class Toggle extends React.Component {
//       constructor(props) {
//             super(props);
//             this.state = { isToggleOn: true };

//             // This binding is necessary to make `this` work in the callback
//             this.handleClick = this.handleClick.bind(this);
//       }

//       handleClick() {
//             this.setState(state => ({
//                   isToggleOn: !state.isToggleOn
//             }));
//       }

//       render() {
//             return (
//                   <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'ON' : 'OFF'}
//       </button>
//             );
//       }
// }

// ReactDOM.render(
//       <Toggle />,
//       document.getElementById('root')
// );



// class Toggle extends React.Component {
//       constructor(props) {
//             super(props);
//             this.state = { toggleState: true, id: 1 };
//       }
//       handleClick = (id) => {
//             // this.setState(state => ({
//             //       toggleState: !state.toggleState
//             // }));
//             // {this.state.toggleState ? "Yes":"No"}
//             console.log("this is :", id.target);
//       }
//       render() {
//             return <div onClick = {this.handleClick.bind(this)}>
//             Click me
//             </div>;
//       }
// }

// ReactDOM.render(<Toggle />, document.getElementById("root"));







// function UserGreetings() {
//       return "Welcome Back!";
// }

// function GuestGreetings() {
//       return "Please Sign In";
// }

// function Greetings(props) {
//       let isLoggedIn = props.isLoggedIn;
//       if (isLoggedIn) {
//             return <UserGreetings />;
//       }
//       else {
//             return <GuestGreetings />;
//       }
// }

// function LogIn(props) {
//       return <button onClick={props.onClick}>
//       LogOut
//       </button>;
// }

// function LogOut(props) {
//       return <button onClick={props.onClick}>
//       LogIn
//       </button>;
// }

// class LoginControl extends React.Component {
//       constructor(props) {
//             super(props);
//             this.state = { isLoggedIn: false };
//             console.log(1);
//       }
//       handleLoginClick = () => {
//             this.setState({
//                   isLoggedIn: true
//             });
//             console.log(3);
//       }
//       handleLogoutClick = () => {
//             this.setState({
//                   isLoggedIn: false
//             });
//             console.log(4);
//       }
//       render() {
//             const isLoggedIn = this.state.isLoggedIn;
//             let button;
//             console.log(2);
//             if (isLoggedIn) {
//                   button = <LogIn onClick={this.handleLogoutClick}/>;
//             }
//             else {
//                   button = <LogOut onClick={this.handleLoginClick}/>;
//             }
//             return (<div>
//             <Greetings isLoggedIn={isLoggedIn}/>
//             {button}
//             </div>);
//       }
// }

// ReactDOM.render(<LoginControl />, document.getElementById("root"));






function ListNumber(props) {
      return <li>{props.value}</li>;
}

function NameList(props) {
      const numbers = props.numbers;
      const listNumbers = numbers.map((number) =>
            <ListNumber key={number.toString()} 
            value={number}/>
      );
      return <ul>{listNumbers}</ul>;
}


let numbers = [1, 2, 3, 4, 5];
ReactDOM.render(<NameList numbers={numbers}/>, document.getElementById("root"));
