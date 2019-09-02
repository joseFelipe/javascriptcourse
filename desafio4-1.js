var promise = new Promise((resolve, reject) => {
  let idade = 18;

  if (idade >= 18) {
    resolve("Maior de idade.");
  } else {
    reject("Menor de idade.");
  }
});

promise
  .then(resultado => {
    console.log(resultado); //Maior de idade.
  })
  .catch(erro => {
    console.log(erro); //Menor de idade.
  });
