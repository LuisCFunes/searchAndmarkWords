const searchAndmark = () => {
    const palabra = document.getElementById("wordInput").value.toLowerCase();
    const contenido = document.getElementById("text").textContent;
    const contenidoResaltado = contenido.replace(
      new RegExp(palabra, "gi"),
      (match) => `<span class="markup">${match}</span>`
    );
    document.getElementById("text").innerHTML = contenidoResaltado;
};

document
  .getElementById("searchBtn")
  .addEventListener("click", searchAndmark);
