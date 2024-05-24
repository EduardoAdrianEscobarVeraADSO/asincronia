// 3. Basado en la solución del punto 2, transforme esta solución utilizando
// async / await
// a.muestre los repositorios públicos de cada aprendiz en consola.
//   b.Una todos los resultados en un solo arreglo
// c.Filtre la consulta con solo los aprendices que tengan el rol de
// aprendiz, esta solución se deba dar antes de realizar la solicitud al
// api.


async function funcion() {
  const response = await fetch('user.json');

  const data = await response.json();

  const aprendices = data.users.filter(user => user.aprendiz);
  const promises = aprendices
    .map(async user => {
      const gitresponse = await fetch(`https://api.github.com/users/${user.user}/repos`);
      const repositories = await gitresponse.json();
      return repositories.map(repo => ({ name: user.name, repository: repo.name }));
    });

  const repositories = (await Promise.all(promises));

  console.log(repositories);
}

funcion();
