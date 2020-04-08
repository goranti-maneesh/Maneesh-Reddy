//Write your javascript logic here
let leftComponentHeight = "500";
let leftComponentFunction = (color) => {
      document.getElementById("left-component").style.height = leftComponentHeight + "px";
      document.getElementById("left-component").style.width = "190px";
      document.getElementById("left-component").style.background = color;
};
let rightTopComponentFunction = (color) => {
      document.getElementById("right-top-component").style.height = "153px";
      document.getElementById("right-top-component").style.width = "230px";
      document.getElementById("right-top-component").style.background = color;
};
let rightMiddleComponentFunction = (color) => {
      document.getElementById("right-middle-component").style.height = "153px";
      document.getElementById("right-middle-component").style.width = "230px";
      document.getElementById("right-middle-component").style.background = color;
};
let rightBottomComponentFunction = (color) => {
      document.getElementById("right-bottom-component").style.height = "153px";
      document.getElementById("right-bottom-component").style.width = "230px";
      document.getElementById("right-bottom-component").style.background = color;
};
let leftComponentLeftArrow = () => {
      document.getElementById("left-component").style.order = "-1";
};
let leftComponentRightArrow = () => {
      document.getElementById("left-component").style.order = "2";
      document.getElementById("right-top-component").style.opacity = "1";
};
// let leftComponentUpArrow = () => {
function leftComponentUpArrow() {
      if (leftComponentHeight <= 100) {
            alert("Minimun height reached");
      }
      else {
            document.getElementById("left-component").style.height = leftComponentHeight - 10 + "px";
            leftComponentHeight = (document.getElementById("left-component").style.height[0] * 100) + (document.getElementById("left-component").style.height[1] * 10) + (document.getElementById("left-component").style.height[2] * 1);
            //alert(rightComponentHeight);
      }
}
let leftComponentDownArrow = () => {
      if (leftComponentHeight >= "500") {
            alert("Maximum height reached");
      }
      else {
            document.getElementById("left-component").style.height = leftComponentHeight + 10 + "px";
            leftComponentHeight = (document.getElementById("left-component").style.height[0] * 100) + (document.getElementById("left-component").style.height[1] * 10) + (document.getElementById("left-component").style.height[2] * 1);
      }
};

function getStyle(x, styleProp) {
      if (x.currentStyle)
            var y = x.currentStyle[styleProp];
      else if (window.getComputedStyle)
            y = document.defaultView.getComputedStyle(x, null).getPropertyValue(styleProp);
      return y;
}
let rightTopComponentDownArrowfunction = () => {
      let b2 = document.getElementById("right-top-component");
      let b3 = document.getElementById("right-middle-component");
      let y1 = getStyle(b3, 'background-color');
      document.getElementById("right-middle-component").style.backgroundColor = getStyle(b2, 'background-color');
      document.getElementById("right-top-component").style.backgroundColor = y1;
};
let rightMiddleComponentDownArrowfunction = () => {
      let b2 = document.getElementById("right-middle-component");
      let b3 = document.getElementById("right-bottom-component");
      let y1 = getStyle(b3, 'background-color');
      document.getElementById("right-bottom-component").style.backgroundColor = getStyle(b2, 'background-color');
      document.getElementById("right-middle-component").style.backgroundColor = y1;
};
