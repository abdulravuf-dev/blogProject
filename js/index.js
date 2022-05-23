



 
 
 
 
 fetch('https://gnews.io/api/v4/top-headlines?q=politique&country=fr&language=fr&token=fd91775a9ebca89718deb03b603161c1  ') 

 
 
.then(function (response) {
  return response.json();
  
})


// console.log("working " + response)
.then(function (data) {

console.log( "working"+data);
 



  let img1 = document.querySelector('.img1')
// console.log(img1)
  let imgUrl = document.getElementById('imgUrl')
  let indexTitle = document.getElementById('indexTitle')

// index img start
  img1.src= ` ${data.articles[5].image}`
imgUrl.href=` ${data.articles[5].url}`
indexTitle.innerHTML=` ${data.articles[(5)].title}`
indexUrl.href=` ${data.articles[5].url}`
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
 

 


 
 
 
 fetch('https://gnews.io/api/v4/top-headlines?q=politique&country=fr&language=fr&token=fd91775a9ebca89718deb03b603161c1  ') 

   
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {

  console.log(data);
 
  
  let premiere1 = document.getElementById('premiere1')
  let premiere2 = document.getElementById('premiere2')
  let premiere3 = document.getElementById('premiere3')
  let premiere4 = document.getElementById('premiere4')

  premiere1.href =` ${data.articles[1].url}`

  premiere2.href =` ${data.articles[2].url}`
  premiere3.href =` ${data.articles[3].url}`
  premiere4.href =` ${data.articles[4].url}`


  let linkHeader1 = document.getElementById('linkHeader1')
  let linkHeader2= document.getElementById('linkHeader2')
  let linkHeader3= document.getElementById('linkHeader3')
  let linkHeader4= document.getElementById('linkHeader4')


  linkHeader1.href =` ${data.articles[1].url}`

  linkHeader2.href =` ${data.articles[2].url}`
  linkHeader3.href =` ${data.articles[3].url}`
  linkHeader4.href =` ${data.articles[4].url}`




  let IndexSec3H1 = document.getElementsByClassName('IndexSec3H1');

 let imags = document.getElementsByClassName('IndexImages');
  
     for(let i=0; i<=4; i++)
     {
     

  imags[i].src=` ${data.articles[i].image}`;


   IndexSec3H1[i].innerHTML=` ${data.articles[i].title}   `;
  //  IndexSec3H1[1].innerHTML=` ${data.articles[i].title}`;
} 

})
 

 
 
fetch('https://gnews.io/api/v4/top-headlines?&language=fr&q=internationale&token=   ') 
 
.then(function (response) {
  return response.json();
})
.then(function (data) {

console.log(data);
 
 let Index3H1 = document.getElementsByClassName('Index3H1');

let imageIndexSection3 = document.getElementsByClassName('imageIndexSection3');
 
let Section3same1 = document.getElementById('Section3same1')
let Section3same2 = document.getElementById('Section3same2')
let Section3same3 = document.getElementById('Section3same3')
let Section3same4 = document.getElementById('Section3same4')

Section3same1.href =` ${data.articles[0].url}`

Section3same2.href =` ${data.articles[1].url}`
Section3same3.href =` ${data.articles[2].url}`
Section3same4.href =` ${data.articles[3].url}`


let Section3link1 = document.getElementById('Section3link1')
let Section3link2= document.getElementById('Section3link2')
let Section3link3= document.getElementById('Section3link3')
let Section3link4= document.getElementById('Section3link4')


Section3link1.href =` ${data.articles[0].url}`

Section3link2.href =` ${data.articles[1].url}`
Section3link3.href =` ${data.articles[2].url}`
Section3link4.href =` ${data.articles[3].url}`

   for(let i=0; i<=4; i++)
   {
   

    imageIndexSection3[i].src =` ${data.articles[i].image}`
   Index3H1[i].innerHTML=` ${data.articles[i].title}`

} 

})
 
 
  fetch('https://gnews.io/api/v4/search?q=sport&country=fr&language=fr&token=fd91775a9ebca89718deb03b603161c1') 
.then(function (response) {
  return response.json();
})
.then(function (data) {

console.log(data);
let Section2same1 = document.getElementById('Section2same1')
let Section2same2 = document.getElementById('Section2same2')
let Section2same3 = document.getElementById('Section2same3')
let Section2same4 = document.getElementById('Section2same4')

Section2same1.href =` ${data.articles[0].url}` 
Section2same2.href =` ${data.articles[1].url}`
Section2same3.href =` ${data.articles[2].url}`
Section2same4.href =` ${data.articles[3].url}`
 
  let Section2IdLink = document.getElementsByClassName('Section2IdLink');
 
let Section2HeadingLink1 = document.getElementById('Section3link1')
let Section2HeadingLink2= document.getElementById('Section3link2')
let Section2HeadingLink3= document.getElementById('Section3link3')
let Section2HeadingLink4= document.getElementById('Section3link4')


Section2HeadingLink1.href =` ${data.articles[0].url}` 

Section2HeadingLink2.href =` ${data.articles[1].url}`
Section2HeadingLink3.href=` ${data.articles[2].url}`
Section2HeadingLink4.href =` ${data.articles[3].url}`
 
let sectImage1 = document.getElementsByClassName('sectImage1');
   for(let i=0; i<=4; i++)
   {
   

    sectImage1[i].src =` ${data.articles[i].image}`
 

    Section2IdLink[i].innerHTML=` ${data.articles[i].title}`
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





















