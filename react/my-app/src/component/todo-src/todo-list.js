// let i;
// let divForLiElement;
// let noOfTodoElements = 0;
// let close = document.getElementsByClassName("close");
// let todoItemsLeft = document.getElementById("todoItemsLeft");
// let mainTodoElement = document.getElementById("mainTodoElement");
// let li = document.createElement("li");
// let todoFooter = document.getElementById("todoFooter");
// let borderForAll = document.getElementById("allTodoItems");
// let borderForActive = document.getElementById("incompleteTodoItems");
// let borderForComplete = document.getElementById("todoCompletedItems");
// let borderForClearComplete = document.getElementById("deleteCompletedTodos");
// li.idname = "idForList";
// todoFooter.style.display = "none";


// let toShowAllTodos = (event, footerOperationUsingCheckbox) => {
//       //document.getElementsByClassName("flex-todo-list").style.display = "flex";
//       footerOperationUsingCheckbox.parentElement.style.display = "flex";
//       borderForAll.style.border = "1px solid #f0adad";
//       borderForActive.style.border = "0px";
//       borderForComplete.style.border = "0px";
//       borderForClearComplete.style.border = "0px";
//       console.log("yes");
// }



// let toShowActiveTodos = (event, footerOperationUsingCheckbox) => {
//       if (footerOperationUsingCheckbox.checked === false) {
//             footerOperationUsingCheckbox.parentElement.style.display = "flex";
//             console.log(footerOperationUsingCheckbox.checked);
//       }
//       else {
//             footerOperationUsingCheckbox.parentElement.style.display = "none";
//             console.log(footerOperationUsingCheckbox.checked);
//       }
//       borderForActive.style.border = "1px solid #f0adad";
//       borderForAll.style.border = "0px";
//       borderForComplete.style.border = "0px";
//       borderForClearComplete.style.border = "0px";
// };


// let toShowCompleteTodos = (event, footerOperationUsingCheckbox) => {
//       if (footerOperationUsingCheckbox.checked === true) {
//             footerOperationUsingCheckbox.parentElement.style.display = "flex";
//             console.log(footerOperationUsingCheckbox.checked);
//       }
//       else {
//             footerOperationUsingCheckbox.parentElement.style.display = "none";
//             console.log(footerOperationUsingCheckbox.checked);
//       }
//       borderForComplete.style.border = "1px solid #f0adad"
//       borderForAll.style.border = "0px"
//       borderForActive.style.border = "0px"
//       borderForClearComplete.style.border = "0px"
// };


// let toShowClearCompleteTodos = (event, footerOperationUsingCheckbox) => {
//       if (footerOperationUsingCheckbox.checked === true) {
//             footerOperationUsingCheckbox.parentElement.remove();
//       }
//       borderForClearComplete.style.border = "1px solid #f0adad"
//       borderForAll.style.border = "0px"
//       borderForActive.style.border = "0px"
//       borderForComplete.style.border = "0px"
// };


// let creat
// ingTodoListEl = (inputValue) => {
//       divForLiElement = document.createElement("DIV");
//       let span = document.createElement("SPAN");
//       let txt = document.createTextNode("x");
//       let textInput = document.createElement("INPUT");
//       let checkboxInput = document.createElement("INPUT");

//       span.className = "close";
//       textInput.typeName = "text";
//       textInput.className = "inputclass";
//       checkboxInput.type = "checkbox";
//       checkboxInput.className = "checkbox-width";
//       divForLiElement.className = "flex-todo-list";

//       textInput.value = inputValue;

//       li.appendChild(textInput);
//       span.appendChild(txt);

//       divForLiElement.appendChild(checkboxInput);
//       divForLiElement.appendChild(textInput);
//       divForLiElement.appendChild(span);
//       li.appendChild(divForLiElement);
// };



// document.getElementById("totalTodo").onkeypress = (event) => {
//       if (event.keyCode === 13) {

//             let inputValue = document.getElementById("myInput").value;
//             if (inputValue === '') {
//                   //alert("You must write something!");
//             }
//             else {
//                   document.getElementById("myUL").appendChild(li);
//                   creatingTodoListEl(inputValue);
//                   noOfTodoElements += 1;
//                   todoItemsLeft.innerHTML = noOfTodoElements;
//             }
//             document.getElementById("myInput").value = "";
//             //toShowAllTodos();

//             console.log(noOfTodoElements);
//             if (noOfTodoElements > 0) {
//                   console.log(noOfTodoElements);
//                   todoFooter.style.display = "flex";
//             }
//       }
// };



// mainTodoElement.addEventListener("click", function(event) {

//       if (event.target.type === "checkbox") {
//             if (event.target.checked) {
//                   noOfTodoElements -= 1;
//                   event.target.nextElementSibling.style.textDecoration = "line-through";
//                   event.target.style.color = "#d9d9d9";
//                   event.target.nextElementSibling.disabled = true;
//                   todoItemsLeft.innerHTML = noOfTodoElements;
//             }
//             else if (event.target.checked === false) {
//                   noOfTodoElements += 1;
//                   event.target.nextElementSibling.style.textDecoration = "none";
//                   event.target.nextElementSibling.disabled = false;
//                   todoItemsLeft.innerHTML = noOfTodoElements;
//             }
//       }
//       else if (event.target.className === "close") {
//             if (event.target.previousElementSibling.disabled === false) {
//                   noOfTodoElements -= 1;
//                   todoItemsLeft.innerHTML = noOfTodoElements;
//             }
//             event.target.parentNode.remove();
//       }
// });



// todoFooter.addEventListener("click", function(event) {
//       let todoInputList = document.querySelectorAll(".flex-todo-list");
//       console.log(todoInputList.length);
//       for (i = 0; i < todoInputList.length; i++) {

//             let footerOperationUsingCheckbox = todoInputList[i].querySelector(".checkbox-width");

//             if (event.target.id === "allTodoItems") {
//                   toShowAllTodos(event, footerOperationUsingCheckbox);
//             }

//             else if (event.target.id === "incompleteTodoItems") {
//                   toShowActiveTodos(event, footerOperationUsingCheckbox);
//             }

//             else if (event.target.id === "todoCompletedItems") {
//                   toShowCompleteTodos(event, footerOperationUsingCheckbox);
//             }

//             else if (event.target.id === "deleteCompletedTodos") {
//                   toShowClearCompleteTodos(event, footerOperationUsingCheckbox);
//             }
//       }
// });


import React from 'react';

class CheckboxAndCancelButton extends React.Component {
      constructor(props) {
            super(props);
            this.state = {
                  completedTodoList: [],
            };
      }

      checkboxDisabled = (event) => {
            if (event.target.checked) {
                  event.target.nextElementSibling.disabled = true;
                  event.target.nextElementSibling.style.textDecoration = "line-through";
            }
            else {
                  event.target.nextElementSibling.disabled = false;
                  event.target.nextElementSibling.style.textDecoration = "none";
            }
      }

      render(props) {
            return <div>
                  <div>
                        <input type="checkbox" value="todo" onClick={this.checkboxDisabled}></input>
                        <input value={this.props.todo}/>
                        <button onClick={()=> this.props.todoArray(this.props.todo)}>X</button>
                  </div>
            </div>;
      }
}



class Todo extends React.Component {
      constructor(props) {
            super(props);
            this.state = {
                  value: "",
                  todoListArray: []
            };
      }
      // todoList = ()  =>{

      // }
      something = (event) => {
            if (event.keyCode === 13 && event.target.value !== "") {
                  this.setState({
                        value: event.target.value
                  });
                  let todoPushArray = this.state.todoListArray;
                  let todoPresentList = event.target.value;
                  todoPushArray.push(todoPresentList);
                  this.setState({
                        todoListArray: todoPushArray,
                  });
            }
            this.setState({
                  value: "",
            });
      }

      removeTodo = (todo) => {
            let todoList = this.state.todoListArray;
            let index = this.state.todoListArray.indexOf(todo);
            todoList.splice(index, 1);
            this.setState({
                  todoListArray: todoList
            });
      }

      // footerButtons = (event) => {
      //       for (let i = 0; i < this.state.todoListArray.length; i++) {
      //             if (event.target.id === "activeButton") {
      //                   alert(this.state.todoListArray[i]);
      //                   event.target.id.style.display = "none";
      //             }
      //       }
      // }

      render() {
            return <div>
            <input type = "text" onKeyDown = {(e) => this.something(e)} />
            <div>{this.state.todoListArray.map(m => <CheckboxAndCancelButton todoArray={this.removeTodo} key={m} todo={m} />)}</div>
            <div>{this.state.todoListArray.length} items left</div>
            <div>
                  <button> All </button>
                  <button onClick={this.footerButtons} id="activeButton"> Active </button>
                  <button onClick={this.footerButtons} id="completedButton"> Completed </button>
                  <button onClick={this.footerButtons} id="clearCompleteButton"> Clear complete </button>
            </div>
            </div>;
      }
}


export { Todo };
