// const ul = document.querySelector("ul"),
// input = ul.querySelector("input"),
// countNumb = document.querySelector(".details span");

// let maxTags = 10,
// tags = [];

// countTag();

// function countTag(){
//   input.focus();
//   countNumb.innerText = maxTags - tags.length; //subtracting max value with the tags length
// }

// function createTag(){
//   //Removing all li tags before adding so there will be no duplicate tags
//   ul.querySelectorAll("li").forEach(li => li.remove());
//   tags.slice().reverse().forEach(tag =>{
//     let liTag = `<li>${tag} <i class="uit uit-multiply" onclick="remove(this, '${tag}')"></i></li>`;
//     ul.insertAdjacentHTML("afterbegin", liTag); //inserting or adding li inside ul tag
//   });
//   countTag();
// }

// function remove(element, tag){
//   let index = tags.indexOf(tag);//getting removing tag index
//   tags = [...tags.slice(0, index), ...tags.slice(index + 1)]; //removing or excluding selected tag from an array
//   element.parentElement.remove();//removing li of removed tag
//   countTag();
// }

// function addTag(e){
//   if (e.key == "Enter"){
//     let tag = e.target.value.replace(/\s+/g, ' '); // removing unwanted spaces from user tag
//     if(tag.length > 1 && !tags.includes(tag)){ //if tag length is greater than 1 and the tag doesn't exist already
//       if (tags.length < 10){// if tags length is less than 10 then only add tag
//         tag.split(',').forEach(tag => { //splitting each tag from comma(,)
//           tags.push(tag); // adding each tag inside array
//           createTag();
//         });
//       }
//     }
//     e.target.value = "";
//   }
// }

// input.addEventListener("keyup", addTag);

// const removeBtn = document.querySelector("button");
// removeBtn.addEventListener("click", () =>{
//   tags.length = 0; //making an empty array
//   ul.querySelectorAll("li").forEach(li => li.remove());//removing all li tags
//   countTag();
//   });

//TESTING

const ul = document.querySelector("ul"),
input = document.querySelector("input"),
tagNumb = document.querySelector(".details span");
let maxTags = 10,
tags = [];
countTags();
createTag();
function countTags(){
    input.focus();
    tagNumb.innerText = maxTags - tags.length;
}
function createTag(){
    ul.querySelectorAll("li").forEach(li => li.remove());
    tags.slice().reverse().forEach(tag =>{
        let liTag = `<li>${tag} <i class="uit uit-multiply" onclick="remove(this, '${tag}')"></i></li>`;
        ul.insertAdjacentHTML("afterbegin", liTag);
    });
    countTags();
}
function remove(element, tag){
    let index  = tags.indexOf(tag);
    tags = [...tags.slice(0, index), ...tags.slice(index + 1)];
    element.parentElement.remove();
    countTags();
}
function addTag(e){
    if(e.key == "Enter"){
        let tag = e.target.value.replace(/\s+/g, ' ');
        if(tag.length > 1 && !tags.includes(tag)){
            if(tags.length < 10){
                tag.split(',').forEach(tag => {
                    tags.push(tag);
                    createTag();
                });
            }
        }
        e.target.value = "";
    }
}
input.addEventListener("keyup", addTag);
const removeBtn = document.querySelector(".details button");
removeBtn.addEventListener("click", () =>{
    tags.length = 0;
    ul.querySelectorAll("li").forEach(li => li.remove());
    countTags();
});