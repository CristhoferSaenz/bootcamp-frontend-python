const url = 'https://jsonplaceholder.typicode.com/users';

//fetch(url)
//    .then(respuesta => respuesta.json()) 
//    .then(datos => {
//        console.log(datos);
//    })  
//    .catch(error => {
//        console.log(error);
//    })

const fetchUsersSinRetorno = async () => {
   const response = await fetch(url)
   const data = await response.json()
   console.log(data)
}   

fetchUsersSinRetorno()

const fetchUsersConRetorno= async () => {
    const response = await fetch(url)
    return await response.json()

}

fetchUsersConRetorno() 
.then(users => console.log(users))