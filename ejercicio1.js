// // a.Describa el paso a paso del ejercicio(comente cada línea de
// // código).

// (async () => { // aqui se inicia la funcion anonima que se iniciara instantaneamente
//   // cbtener los datos de los usuarios desde el archivo user.json
//   let response = await fetch('datos.json'); //await se utiliza para esperar la solucion del fetch
//   let user = await response.json(); //espera que el response.json se resuelva y lo convierte en un objeto de javascript

//   // hacer una solicitud a la api de github para obtener los repositorios del usuario actual y construir una url con la solicitud y como antes el await se utiliza para que espere la respuesta
//   let respuestgithub = await fetch(`https://api.github.com/users/${user.name}/repos`);
//   let usuariogithub = await respuestgithub.json();
//   //luego lo convertimos nuevamente en un objeto de js y el await para que espere una respuesta

//   // recorremos usuariogithub que es donde estan almacenados los repositorios del usuario en git
//   usuariogithub.forEach(element => {
//     // verificar si el nombre del repositorio es evaluacion
//     if (element.name === "Evaluacion") {
//       // si es evaluacion, imprimir el repositorio en la consola
//       console.log(element)
//     }
//   })
// })();//por ultimo invocamos la funcion anonima para que se ejecute



// Solucione el mismo ejercicio, utilizando solo promesas no
// async / await.

function funcion() { //creo una funcion
  fetch('datos.json') //hago el llamado del archivo json
    .then(response => { return response.json(); }) // cuando la solicitud se resuelve convierto la respuesta en un objeto json 
    .then(user => { //con el objeto json obtenido seguimos con la peticion 
      fetch(`https://api.github.com/users/${user.name}/repos`)// se hace la peticion al api de git hub para obtener los repositorios 
        .then(respuestgithub => { return respuestgithub.json(); }) //cuando la peticion de la api se resuelve la convierto en un objeto json
        .then(usuariogithub => {//con el objeto procedo a iterar sobre cada repositorio del array del usuario de git hub
          usuariogithub.forEach(element => {//se utiliza un for each para recorrer el objeto del json
            if (element.name === "Evaluacion") { //buscar los repositorios que se llamen evaluacion 
              console.log(element); //mostrarlo
            }
          });
        })
    })
}
funcion() //llamo la funcion para que se ejecute
  
