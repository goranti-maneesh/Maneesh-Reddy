/*global fetch*/

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then(response => response.json())
//   .then(json => console.log(json));

// Output
/*

[
  ({ id: 1, title: "Sample title1", body: "Sample Body1" },
  ...
  { id: 100, title: "Sample title100", body: "Sample Body100" })
];

*/

//Write your javascript logic here

//let title = document.getElementById("title");
//let body = document.getElementById("body");

// fetch("https://jsonplaceholder.typicode.com/posts").then((response) => {
//     return response.json();
//   })
//   .then(json => {

//     json.forEach(id => {
//       let loading = document.getElementById("loading");

//       let divForTitle = document.createElement("div");
//       let divForBody = document.createElement("div");
//       let divForParent = document.createElement("div");

//       divForParent.className = "parentDiv";
//       divForTitle.className = "title";
//       divForBody.className = "body";
//       divForTitle.innerHTML = id.title;
//       divForBody.innerHTML = id.body;

//       document.body.appendChild(divForTitle);
//       document.body.appendChild(divForBody);
//       divForParent.appendChild(divForTitle);
//       divForParent.appendChild(divForBody);
//       document.body.appendChild(divForParent);

//       loading.style.display = "none";
//     });
//   });

let dropDown = document.getElementById("dropDown");
let nameOnclick = document.getElementsByClassName("nameOnclick");
let divForParent = document.getElementById("mainDiv");


fetch("https://5e68646ed426c00016b7cf0f.mockapi.io/api/v1/users").then((response) => {
    return response.json();
  })
  .then(json => {
    json.forEach(id => {
      let optionTag = document.createElement("option");
      optionTag.className = "nameOnclick";
      optionTag.value = id.userId;
      optionTag.textContent = id.name;
      dropDown.appendChild(optionTag);
    });
  });


dropDown.onchange = (event) => {
  //console.log(event.target.value);
  divForParent.innerHTML = "";
  fetch(`https://5e68646ed426c00016b7cf0f.mockapi.io/api/v1/users/${event.target.value}/posts`).then((response) =>
      response.json())
    .then(json => {


      json.forEach(id => {
        let divForTitle = document.createElement("div");
        let divForBody = document.createElement("div");
        let divForComments = document.createElement("div");


        divForTitle.textContent = id.title;
        divForBody.textContent = id.body;
        divForComments.textContent = id.noOfComments;

        divForParent.appendChild(divForTitle);
        divForParent.appendChild(divForBody);
        divForParent.appendChild(divForComments);

        document.body.appendChild(divForParent);
        //console.log(event.target.value);
        // console.log(id.userId, "post");
        // if (event.target.value == id.userId) {
        //   console.log(id);
        //   divForParent.style.display = "flex";
        // }
        // else {
        //   console.log(id);
        //   divForParent.style.display = "none";
        // }
      });
      //console.log(json);
    });
};
