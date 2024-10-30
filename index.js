//Creamos el Objeto Book
class Book {
  constructor(title, author, pages, readed) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readed = readed;
  }
  cambiarEstado() {
    if (this.readed == "Si") this.readed = "No";
    else this.readed = "Si";
  }
}

//Definimos Array de libros
const myLibrary = [];
window.onload = displayBooks();

//Funcion Agregar Libros
function addBookToLibrary(title, author, pages, readed) {
  const newBook = new Book(title, author, pages, readed);
  myLibrary.push(newBook);
  console.log(myLibrary);
  displayBooks();
}

const btn_addbook = document.querySelector(".add-book");
const dialog = document.getElementById("dialog");
const form = document.getElementById("dialog-form");

form.addEventListener("submit", (e) => {
  e.preventDefault;
  const titulo = document.getElementById("titulo").value;
  const autor = document.getElementById("autor").value;
  const pages = document.getElementById("pages").value;
  const readed = document.getElementById("readed").value;
  addBookToLibrary(titulo, autor, pages, readed);
  dialog.close();
});

btn_addbook.addEventListener("click", () => {
  dialog.showModal();
});

function displayBooks() {
  const container = document.querySelector(".book-container");
  container.innerHTML = "";
  myLibrary.forEach((book, i) => {
    const div = document.createElement("div");
    div.className += "book";
    div.innerHTML = `<h2>${book.title}</h2>
    <div class="info">
      <p>Autor: ${book.author}</p>
      <p>Leido: ${book.readed}</p>
      <p>C. de Paginas: ${book.pages}</p>
    </div>
    <div class="botones">
      <button onClick="cambiarEstado(${i})">Cambiar Estado</button>
      <button onClick="borrarLibro(${i})" >Borrar Libro</button>
    </div>`;
    container.appendChild(div);
  });

  console.log(myLibrary.length);
  if (myLibrary.length == 0) container.classList.add("hidden");
  else container.classList.remove("hidden");
}

function borrarLibro(index) {
  myLibrary.splice(index, 1);
  displayBooks();
}

function cambiarEstado(index) {
  myLibrary[index].cambiarEstado();
  displayBooks();
}
