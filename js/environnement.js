
 //fetch('https://gnews.io/api/v4/search?q=climat&country=fr&language=fr&token=4ba691ab1fcd5a75cbb4e787a05ca325') 
 
 //fetch('https://gnews.io/api/v4/search?q=jeux&country=fr&language=fr&token=8bd5580934170ab56a0718c2d7eed09a') 

  fetch('https://gnews.io/api/v4/top-headlines?q=atmosphère climat&country=fr&length=15&language=fr&token=5c20e1113984690e47d0c77c02227ca4') 
   

//   fetch('https://gnews.io/api/v4/environnment?q=environnment&language=fr&token=4ba691ab1fcd5a75cbb4e787a05ca325') 
.then(function (response) {
 return response.json();
 
})
.then(function (data) {

console.log(data);
 
let environn = document.querySelector('.environn')


for(let i=0; i<=10; i++)
   {
    environn.innerHTML +=  `
<div class="InterArticle"><a href=" ${data.articles[i].url}"><img class="InterImage" src= ${data.articles[i].image} >  </a>
<div class="InterArticleChild">
<a class="InterAnchor" href=" ${data.articles[i].url}"><h3 class="InterTitle">  ${data.articles[i].title} </h3>     </a>
<p class="InterPara">  ${data.articles[i].description} </p>  
</div>
</div>`  

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