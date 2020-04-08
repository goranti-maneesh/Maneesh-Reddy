/*global ReactDOM*/




// preview - 1

function Welcome(prop) {
      const strikeProp = <strike> {prop.strikeThrough}</strike>;
      return strikeProp;
}
const rootElement = document.getElementById("root");
const element = <Welcome strikeThrough = {prompt()}/>;
ReactDOM.render(element, rootElement);




// preview - 2

function StandardImageView() {
      return <div className="rectangle-view"><img className="rectangle-image" src="./assets/koru-sprial-shape.jpg"/></div>;
}

function RoundedEdgesImageView() {
      return <div className="rectangle-radius-view"><img className="rectangle-radius-image" src="./assets/koru-sprial-shape.jpg"/></div>;
}

function CircularImageView() {
      return <div className="rectangle-circular-view"><img className="rectangle-circular-image" src="./assets/koru-sprial-shape.jpg"/></div>;
}

const ImageViews = document.getElementById("imageViews");

function Images() {
      return <div>
<StandardImageView />
<RoundedEdgesImageView />
<CircularImageView />
</div>;

}
ReactDOM.render(<Images/>, ImageViews);




//preview - 3

function Message() {
      let type = prompt();
      if (type == "Success Message") {
            let text = prompt();
            return <div className="success message">{text}</div>;
      }
      else if (type == "Warning Message") {
            let text = prompt();
            return <div className="warning message">{text}</div>;
      }
      else if (type == "Info Message") {
            let text = prompt();
            return <div className="info message">{text}</div>;
      }
      else if (type == "Error Message") {
            let text = prompt();
            return <div className="error message">{text}</div>;
      }
}

const Preview3 = document.getElementById("alertMessage");
const AlertMessage = <div><Message /></div>;
ReactDOM.render(AlertMessage, Preview3);
