// let  element = document.querySelector(".fa-bars");
// let  element2 = document.querySelector(".list_active");
//  console.log(element)
// element2.addEventListener("click", myfunction);

// function myfunction(){

//   element.classList.toggle(".list_active");
  

// }

// function myFunction() {
//   var x = document.querySelector(".fa-bars");
//   if (x.style.display === "block") {
//     x.style.display = "none";
//   } else {
//     x.style.display = "block";
//   }
// }


  let  x = document.querySelector(".fa-bars");

  let  x2 = document.querySelector(".list");
  let login = document.querySelector(".login");
  let logo = document.querySelector("#logo");
  x.addEventListener("click", myfunction);
  // x.addEventListener("click", myfunction2);

  function myfunction(){
    if (x2.style.display === "block") {
        x2.style.display = "none";
      } else {
         x2.style.display = "block";
        }


  }
 

  // document.querySelectorAll(".list").forEach(n => n.addEventListener("click",() => {  x2.style.display = "none"} ))