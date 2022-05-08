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
  let  xbody = document.querySelector("body");


  console.log(xbody)
  let  x2 = document.querySelector(".list");
  let login = document.querySelector(".login");
  let logo = document.querySelector("#logo");
  x.addEventListener("click", myfunction);
  // x.addEventListener("click", myfunction2);

  function myfunction(){
    if (x2.style.display === "none") {
        x2.style.display = "block";
      } else {
         x2.style.display = "none";
        }


  }
 

  // document.querySelectorAll(".list").forEach(n => n.addEventListener("click",() => {  x2.style.display = "none"} ))





















  let szer =   fetch('https://gnews.io/api/v4/top-headlines?q=today&language=fr&token=1c2aa79c3174675bd93eb73bc231709b  ') 


// let szer =   fetch('https://gnews.io/api/v4/top-headlines?q=today&language=fr&token=1c2aa79c3174675bd93eb73bc231709b  ') 
 
console.log(szer)




// // fetch('https://gnews.io/api/v4/top-headlines?q=politique&language=fr&token=c7e7ff9e5309678ffee247a96531a76d') 
// .then(function (response) {
//   return response.json();
  
// })
// .then(function (data) {

// console.log(data);
  
// let num =Math.round( Math.random()+1)

// console.log(num)

// let img1 = document.querySelector('.img1')

// img1.src= ` ${data.articles[num].image}`

//  console.log(img1)
 

// })