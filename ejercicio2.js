// 2. Lea el archivo users.json suministrado por el instructor y tome como base
// las capturas para luego mostrar todos los datos de usuario de cada
// aprendiz, este ejercicio de desarrolla con promesas.
//   a.Imprima el resultado en una tabla donde solo nos mostrar el nombre
// y el avatar de cada aprendiz


function funcion() {//creamos la funcion
  fetch('user.json').then(response => response.json()) 
    .then(data => {
      const promises = data.users.filter(user => user.aprendiz).map(user => {
          return fetch(`https://api.github.com/users/${user.user}`).then(response => response.json()) 
            .then(githubuser => ({
              name: user.name,
              avatar: githubuser.avatar_url
            }));
        });

      return Promise.all(promises); 
    })
    .then(users => {
      users.forEach(user => {
        console.table([user.name,user.avatar]); 
      });
    })
    
}

funcion(); //invocamos la funcion