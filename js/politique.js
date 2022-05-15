
 //fetch('https://gnews.io/api/v4/top-headlines?&language=fr&q=internationale&token=4ba691ab1fcd5a75cbb4e787a05ca325') 
 
 fetch('https://gnews.io/api/v4/search?q=nouvelles&country=fr&language=fr&token=d5f206a4d517392d6b6caece38615886') 
 
.then(function (response) {
 return response.json();
 
})
.then(function (data) {

console.log(data);
 
let imageApi = document.querySelector('#imageApi')
 
for(let i=0; i<=10; i++)
{ 
   if( data.articles[i].image === null)
     {
       imageApi.innerHTML.remove();
     
   
   }
   else 
   {

   imageApi.innerHTML +=  `
<div class="InterArticle"><a href=" ${data.articles[i].url}"><img class="InterImage" src= ${data.articles[i].image} >   </a>
<div class="InterArticleChild">
<a class="InterAnchor" href=" ${data.articles[i].url}"><h3 class="InterTitle">  ${data.articles[i].title} </h3>     </a>
<p class="InterPara">  ${data.articles[i].description} </p> 

</div>
</div>`  
}

}

})
