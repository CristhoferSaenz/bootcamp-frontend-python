// OBJETIVO: consultar informacion en formato JSON desde un servicio web y su URL


//console.log(fetch('https://jsonplaceholder.typicode.com/posts')) // -> promise { <pending> }  // -> pending

// Estados de la promesa -> pending, fulfilled(ok), rejected (fallo)

//**fetch('https://jsonplaceholder.typicode.com/posts')
//.then(response => response.json()) // -> promesa que se resuelve con el contenido de la respuesta en formato JSON
//.then(data => console.log(data)) // -> data es el contenido de la respuesta en formato JSON */


// const renderPosts = (posts = []) => {
   // const divApp = document.querySelector('#app')

 //   let postsList = ''
 //   posts.forEach(post => {
       // postsList  = postsList + `<h2>${post.id} - ${post.title}</h2><p1>${post.body}</p1>`
   // })
 
    //divApp.innerHTML = postsList
//}


//fetch('https://jsonplaceholder.typicode.com/posts')
  //  .then(response => response.json())
    //.then(data => {
      //  console.log(data)
       // renderPosts(data)
        //}) 

 const renderPosts = (posts = []) => {
    const divApp = document.querySelector('#app')

    let postsList = ''
    posts.forEach(post => {
        postsList  = postsList + `<h2>${post.id} - ${post.title}</h2><p1>${post.completed}</p1>`
    })
 
    divApp.innerHTML = postsList
}


fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        renderPosts(data)
        }) 