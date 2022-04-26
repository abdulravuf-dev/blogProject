  
// function getRandomNum(e)
// {
//     fetch("https://newsapi.org/v2/top-headlines?country=fr&category=business&apiKey=ad236ef1c81e4cc299a5427352fa90c2")
//     .then(res => res.json())
//     .then(data => console.log(data))
// //    .then(data => console.log(data.articles[1].content))
 
//  } 
 



// let url ="https://newsapi.org/v2/top-headlines?country=fr&apiKey=ad236ef1c81e4cc299a5427352fa90c2";
// $.ajax(url,(response) => {
//     alert(response);
// });  

// $(document).ready(function () {

//     let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=dc57ef5c4b5b4de487d6b685bf401be9";
  
//     $.ajax({
//       url: url,
//       method: "GET",
//       dataType: "JSON",
//     });  

// fetch("https://newsapi.org/v2/everything?q=Apple&from=2022-04-25&sortBy=popularity&apiKey=ad236ef1c81e4cc299a5427352fa90c2")
// .then(res => res.json())
//     //  .then (datas => console.log(datas) )
//     .then (datas.forEach.
      
//     }); => console.log(datas) )


// const datas="";
// datas.map((values)=>{
//     datas =`<h1>${values.content}</h1>`;
// });
// let eeet = document.getElementById(nesss).innerHTML =  datas;
 
// .then((data)=>{
//     return data.json();})
//     .then (datas => { console.log(datas.articles[1].content)
//     const html =datas.articles[1].content.Map(articles =>{
//         return user.content;
//      document.getElementById("demo").innerHTML = html.get("articles");
//     })

    
    // });
// .then((data)=>{
//     return data.json();})
//     .then (datas => { console.log(datas.articles[1].content)
//     const html =new maparticles[1].content.map(articles =>{
   
//         document.getElementById("demo").innerHTML = html.get("articles");
//     })

    
//     });

// let button = document.getElementById("btn");
// console.log
 
//   fetch("https://newsapi.org/v2/top-headlines?country=fr&category=business&apiKey=ad236ef1c81e4cc299a5427352fa90c2")
//  .then(res => res.json())

//   let button = document.querySelector('#btn');
 
 
 
//    let para = document.querySelector('#demo');
    
// //    let para2 = document.querySelector('#demo2');
//    button.addEventListener('click',getRandomNum)

//   //    .then(data => console.log(data.articles[1].content))

// function getRandomNum(e)
// {
//     fetch("https://newsapi.org/v2/top-headlines?country=fr&category=business&apiKey=ad236ef1c81e4cc299a5427352fa90c2")
//     .then(res => res.json())
//     // .then(data => console.log(data))
    
//      .then(data =>{para.innerHTML = data.articles[1].url  })

//     // .then(data =>{para.innerHTML = `<img src="${data.articles[1].urlToImage}" </img>`;})
//     // `<img src="${data.articles[1].urlToImage}


    
//  } 
 
//  function getRandomNum(e)
//  {
//      fetch("https://newsapi.org/v2/top-headlines?country=fr&category=business&apiKey=ad236ef1c81e4cc299a5427352fa90c2")
//      .then(res => res.json())
//      .then(data =>{para2.innerHTML = data.articles[2].title     })
  
//   } 



let button = document.querySelector('#btn');
   let para = document.querySelector('#demo');
    
//    let para2 = document.querySelector('#demo2');
   button.addEventListener('click',getRandomNum)

  //    .then(data => console.log(data.articles[1].content))

function getRandomNum(e)
{
    fetch(" https://content.guardianapis.com/search?api-key=b5c1ccd1-6a2a-4882-985e-054e72abd95e")
    .then(res => res.json())
    .then(data =>{para.innerHTML = data.response.results[1].id })
    // .then(data => console.log(data.results[1].sectionName))
   //  .then(data => console.log(data))
 } 