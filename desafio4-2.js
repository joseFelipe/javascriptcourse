var inputElement = document.querySelector("input");
var listElement = document.querySelector("ul");
var buttonElement = document.querySelector("button");
var divElement = document.querySelector("div");

buttonElement.setAttribute("onclick", "callPromise()");

function callPromise() {
  var url = "https://api.github.com/users/" + inputElement.value + "/repos";
  var liElement = document.createElement("li");
  var loading = document.createTextNode("Carregando...");

  liElement.appendChild(loading);
  listElement.appendChild(liElement);

  axios
    .get(url)
    .then(function(response) {
      var repos = response.data;

      listElement.innerHTML = "";
      for (i = 0; i <= repos.length - 1; i++) {
        var repoElement = document.createElement("li");
        var textElement = document.createTextNode(repos[i].name);
        repoElement.appendChild(textElement);
        listElement.appendChild(repoElement);
      }
    })
    .catch(function(error) {
      listElement.innerHTML = "";
      if (error.response.status === 404) {
        var errorMessage = document.createElement("h3");
        var textMessage = document.createTextNode(
          "Repositório não encontrado."
        );

        errorMessage.appendChild(textMessage);
        divElement.appendChild(errorMessage);
      }
    });
}
