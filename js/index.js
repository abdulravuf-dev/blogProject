 

//change unlock main dic cxkzndkln

 fetch('https://gnews.io/api/v4/top-headlines?q=actualite&country=fr&language=fr&token=d5f206a4d517392d6b6caece38615886') 
 
.then(function (response) {
  return response.json();
  
})
.then(function (data) {

console.log(data);

  let img1 = document.querySelector('.img1')
// console.log(img1)
  let imgUrl = document.getElementById('imgUrl')
  let indexTitle = document.getElementById('indexTitle')

// index img start
  img1.src= ` ${data.articles[2].image}`
imgUrl.href=` ${data.articles[2].url}`
indexTitle.innerHTML=` ${data.articles[2].title}`
indexUrl.href=` ${data.articles[2].url}`
// index img end 


let anchors1 = document.getElementById('anchors1')
let anchors2 = document.getElementById('anchors2')
let anchors3 = document.getElementById('anchors3')
let anchors4 = document.getElementById('anchors4')
 

 
 anchors1.text =` ${data.articles[1].title}`
 anchors1.href =` ${data.articles[1].url}`
 
 anchors2.text =` ${data.articles[2].title}`
 anchors2.href =` ${data.articles[2].url}`
   
 anchors3.text =` ${data.articles[3].title}`
 anchors3.href =` ${data.articles[3].url}`
   
 anchors4.text =` ${data.articles[4].title}`
 anchors4.href =` ${data.articles[4].url}`
 

})
 

 



// change api here
 fetch('https://gnews.io/api/v4/top-headlines?q=politiques&country=fr&language=fr&token=d5f206a4d517392d6b6caece38615886') 

  
  
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {

  console.log(data);
 
  
 
  let IndexSec3H1 = document.getElementsByClassName('IndexSec3H1');

 let imags = document.getElementsByClassName('IndexImages');
  
     for(let i=0; i<=4; i++)
     {
     

  imags[i].src=` ${data.articles[i].image}`;

   IndexSec3H1[i].innerHTML=` ${data.articles[i].title}`;
  //  IndexSec3H1[1].innerHTML=` ${data.articles[i].title}`;
} 

})


 

// change api here
fetch('https://gnews.io/api/v4/top-headlines?&language=fr&q=internationale&token=d5f206a4d517392d6b6caece38615886') 
.then(function (response) {
  return response.json();
})
.then(function (data) {

console.log(data);



 
 let Index3H1 = document.getElementsByClassName('Index3H1');

let imageIndexSection3 = document.getElementsByClassName('imageIndexSection3');




   for(let i=0; i<=4; i++)
   {
   

    imageIndexSection3[i].src =` ${data.articles[i].image}`
   Index3H1[i].innerHTML=` ${data.articles[i].title}`

} 

})


  
 

  let  x = document.querySelector(".fa-bars");
  let  main = document.querySelector("main");

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
 
  main.addEventListener("click", myfunction3);


  function myfunction3(){
 
        x2.style.display = "none";
    
 
 
}

  // document.querySelectorAll(".list").forEach(n => n.addEventListener("click",() => {  x2.style.display = "none"} ))





















