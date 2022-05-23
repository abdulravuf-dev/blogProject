 
 

 //fetch('https://gnews.io/api/v4/top-headlines?&language=fr&q=internationale&token=5c20e1113984690e47d0c77c02227ca4') 
  fetch('https://gnews.io/api/v4/search?q=actualite&country=fr&language=fr&token=5c20e1113984690e47d0c77c02227ca4') 


 //fetch('https://gnews.io/api/v4/top-headlines?q=actualite&language=fr&token=d5f206a4d517392d6b6caece38615886') 
.then(function (response) {
  return response.json();
  
})
.then(function (data) {

console.log(data);
  
let imageApi = document.querySelector('#imageApi')


for(let i=0; i<=10; i++)
{ 
    
    imageApi.innerHTML +=  `
<div class="InterArticle" id="InterArticleId">     <a href=" ${data.articles[i].url}"><img class="InterImage" src= ${data.articles[i].image} >   </a>
 <div class="InterArticleChild">
 <a class="InterAnchor" href=" ${data.articles[i].url}"><h3 class="InterTitle">  ${data.articles[i].title} </h3>     </a>
<p class="InterPara">  ${data.articles[i].description} </p> 
 
</div>
</div>`  
}

 
})


// let header1 = document.getElementById('InterArticleId')

// header1[0].innerHTML =`<h1 class="InterH1">INTERNATIONAL</h1> `


// console.log(header1)



 
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
 





 