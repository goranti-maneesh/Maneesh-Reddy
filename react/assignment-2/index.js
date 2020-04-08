/*global React*/
/*global ReactDOM*/



class CarsList extends React.Component {
      constructor(props) {
            super(props);
            console.log(1);
      }
      render() {
            console.log(2);
      }
}

ReactDOM.render(<CarsList />, document.getElementById("root"));
