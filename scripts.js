var listaLivrosLidos = [
  "https://i.imgur.com/ue6p79d.jpg",
  "https://i.imgur.com/sAABK3O.jpg",
  "https://i.imgur.com/hoab9VQ.jpg",
  "https://i.imgur.com/iFLut2X.jpg",
  "https://i.imgur.com/VXNAHp7.jpg",
  "https://i.imgur.com/2gHDkDB.jpg"
];

function adicionarLivro() {
  var campoLivro = document.getElementById("livro").value;
  if (campoLivro.endsWith(".jpg")) {
    var elementoLivro = "<img src=" + campoLivro + ">";
    var listaLivros = document.getElementById("listaLivros");
    listaLivros.innerHTML = listaLivros.innerHTML + elementoLivro;
  } else {
    console.error("Inválido! A imagem precisa ser em formato .jpg");
  }
  document.getElementById("livro").value = "";
}

for (var indice = 0; indice < listaLivrosLidos.length; indice = indice + 1) {
  document.write("<img src=" + listaLivrosLidos[indice] + "</img>");
}
