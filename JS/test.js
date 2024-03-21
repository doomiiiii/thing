function highlight(){
    document.getElementById("demo").style.color = "red";
};

function addElement() {
  // create a new div element
  var newDiv = document.createElement("div"); 
  newDiv.classList.add("testclass");

  // and give it some content
  const newContent = document.createTextNode("boob");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}
