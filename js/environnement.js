
 fetch('https://gnews.io/api/v4/search?q=celebrite&country=fr&language=fr&token=4ba691ab1fcd5a75cbb4e787a05ca325') 

//  fetch('https://gnews.io/api/v4/search?q=actualite&country=fr&language=fr&token=4ba691ab1fcd5a75cbb4e787a05ca325') 
   


 //fetch('https://gnews.io/api/v4/environnment?q=environnment&language=fr&token=c7e7ff9e5309678ffee247a96531a76d') 
.then(function (response) {
 return response.json();
 
})
.then(function (data) {

console.log(data);
 
let environn = document.querySelector('.environn')


for(let i=1; i<=10; i++)
   {
    environn.innerHTML +=  `
<div class="InterArticle"><a href=" ${data.articles[i].url}"><img class="InterImage" src= ${data.articles[i].image} >  </a>
<div class="InterArticleChild">
<a class="InterAnchor" href=" window.open( ${data.articles[i].url} ,'_blank')"><h3 class="InterTitle">  ${data.articles[i].title} </h3>     </a>
<p class="InterPara">  ${data.articles[i].description} </p>  
</div>
</div>`  

}


})

