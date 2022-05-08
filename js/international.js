  

//   fetch('https://gnews.io/api/v4/top-headlines?&token&token=5c20e1113984690e47d0c77c02227ca4') 
// .then(function (response) {
//   return response.json();
  
// })
// .then(function (data) {

// console.log(data);
  
// let imageApi = document.querySelector('#imageApi')


// for(let i=0; i<=5; i++)
// { 

//     imageApi.innerHTML +=  `
// <div class="InterDisplay"><img class ="InterImage" src= ${data.articles[i].image} >     
//  <div class="InterDisplay2">
// <p id="InterPara">  ${data.articles[i].title} </p>  
// <p id="InterPara">  ${data.articles[i].description} </p> 
// <a href=" ${data.articles[i].url}"><button>Visit Page Now</button></a>
// </div>
// </div>`  
// }

  

// })



 
 fetch('https://gnews.io/api/v4/top-headlines?q=internationale&language=fr&token=4ba691ab1fcd5a75cbb4e787a05ca325') 
 

  //fetch('https://gnews.io/api/v4/top-headlines?q=politique&language=fr&token=c7e7ff9e5309678ffee247a96531a76d') 
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


 
//     // https://api.thenewsapi.com/v1/news/top?api_token=RbIqcYWzhGh1RtUXnM0AKcmgFlRKiB7PmZxvH5UW&locale=us&limit=3
 
//       fetch("https://api.thenewsapi.com/v1/news/top-headlines?locale=fr&language=fr&api_token=RbIqcYWzhGh1RtUXnM0AKcmgFlRKiB7PmZxvH5UW")
//   .then(function (response) {
//     return response.json();
    
// })
// .then(function (data) {

//   console.log(data);
    
// let imageApi = document.querySelector('#imageApi')

//     for(let i=0; i<=20; i++)
//     {

//   if( data.data[i].urlToImage === null)
//   {
// console.log("erroer ")
//  i = i + 1;

// }

// else
// {
//   imageApi.innerHTML +=  `
//   <div class="InterDisplay"><img class ="InterImage" src= ${data.data[i].image_url} >     
//    <div class="InterDisplay2">
//   <p id="InterPara">  ${data.data[i].title} </p>  
//   <p id="InterPara">  ${data.data[i].description} </p> 
//   <a href=" ${data.data[i].url}"><button>Visit Page Now</button></a>
//   </div>
//   </div>`  
// }  

//   } 



//   });









    


//********************************************* */ G news *****************************************

      // fetch("https://newsapi.org/v2/top-headlines?country=fr&category=business&apiKey=ad236ef1c81e4cc299a5427352fa90c2")


// fetch('https://gnews.io/api/v4/top-headlines?q=main&country=fr&language=fr&inurl=lamonde.com&token=5c20e1113984690e47d0c77c02227ca4')
 
//     .then(function (response) {
//         return response.json();
        
//     })
//     .then(function (data) {

//       console.log(data);

//         console.log(data.articles[1].content);
    
//         let imageApi = document.querySelector('#imageApi') 

//         for(let i=1; i<=6; i++)
//         {
//       imageApi.innerHTML +=  `
      
//       <div class="InterDisplay"><img class ="InterImage" src= ${data.articles[i].image} >     
//        <div class="InterDisplay2">
//       <p id="InterPara">  ${data.articles[i].title} </p>  
//       <p id="InterPara">  ${data.articles[i].description} </p> 
//       <a href=" ${data.articles[i].url}"><button>Visit Page Now</button></a>
//       </div>
//       </div>`  
       
//       } 
//     });

    // fetch('https://gnews.io/api/v4/top-headlines?q=main&country=us&language=fr&token=c2b9b2c9c0d7d431d1b0723515c24e55')
 
    // .then(function (response) {
    //     return response.json();
        
    // })
    // .then(function (data) {

    //   console.log(data);
    //     console.log(data.articles[1].content);
    // let imageApi = document.querySelector('#imageApi')

    //     for(let i=0; i<=6; i++)
    //     {
    //   imageApi.innerHTML +=  `
      
    //   <div class="InterDisplay"><img class ="InterImage" src= ${data.articles[i].image} >     
    //    <div class="InterDisplay2">
    //   <p id="InterPara">  ${data.articles[i].title} </p>  
    //   <p id="InterPara">  ${data.articles[i].description} </p> 
    //   <a href=" ${data.articles[i].url}"><button>Visit Page Now</button></a>
    //   </div>
    //   </div>`  
       
    //   } 
    // });



















  //  fetch('https://gnews.io/api/v4/top-headlines?&token=c2b9b2c9c0d7d431d1b0723515c24e55')
  //   .then(function (response) {

  //       return response.json();
        
  //   })
  //   .then(function(data) {

  //     console.log(data);
      
       
  //       for(let i=0; i<9; i++)
  //       {
  //     imageApi2.innerHTML +=  `<img src= ${data.articles[i].image}   >     
  //     <p> ${data.articles[i].description} </p>  `  ;
      
       
  //   }
  //  });

    // https://gnewsapi.net/api/search?q=covid-19&country=us&language=en&limit=5&api_token=[YourApiTokenHere]






//     // apis 
// fake email 
    //   c2b9b2c9c0d7d431d1b0723515c24e55  





