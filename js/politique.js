 
 fetch('https://gnews.io/api/v4/search?q=politique&country=fr&language=fr&token=1c2aa79c3174675bd93eb73bc231709b') 
 
.then(function (response) {
 return response.json();
 
})
.then(function (data) {

console.log(data);
 
let imageApi = document.querySelector('.PolitiqueDivi')
 
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
