// Inicializo la lista de productos
const products = JSON.parse(localStorage.getItem("products")) || [];

// Selecciono los elementos HTML

const newArticleButton = document
  .getElementById("newArticleButton")
  .addEventListener("click", () => newArticle());

const newArticleId = document.getElementById("id");
const newArticleName = document.getElementById("name");
const newArticlePrice = document.getElementById("price");
const newArticleModalMessage = document.getElementById(
  "newArticleModalMessage"
);

// elementos HTML para modificar

const newIdModify = document.getElementById("idToModify");
const newNameModify = document.getElementById("nameToModify");
const newPriceModify = document.getElementById("priceToModify");
const ModifyButton = document
  .getElementById("modifyButton")
  .addEventListener("click", () => upDateNewResults());

const results = document.getElementById("results");

const searchInput = document.getElementById("searchInput");

const search = document
  .getElementById("search")
  .addEventListener("click", () => updateResults());

// Programo la lógica necesaria
const newArticle = () => {
  const product = {
    id: newArticleId.value,
    name: newArticleName.value,
    price: newArticlePrice.value,
  };
  products.push(product);
  localStorage.setItem("products", JSON.stringify(products));
  newArticleId.value = "";
  newArticleName.value = "";
  newArticlePrice.value = "";

  newArticleModalMessage.innerHTML = "Added!";

  updateResults();
};

const updateResults = () => {
  results.innerHTML = "";
  const input = searchInput.value;

  const filtered = products.filter((p) =>
    p.name.toUpperCase().includes(input.toUpperCase())
  );

  // Recorro el array de productos para inyectar codigo HTML tantas veces como productos contenga
  filtered.forEach((p) => {
    // Creo un elemento que va a ser el que inserte al elemento padre que ya seleccione
    const card = document.createElement("article");
    card.className = "border border-1 bg-white p-2 mt-2";

    card.innerHTML = `<div class="d-flex justify-content-between align-items-center">
    <div>#${p.id} ${p.name} ($${p.price})</div>
    <div>
      <button 
        type="button"
        class="btn btn-warning rounded-0" id="${p.name}"
        data-bs-toggle="modal"
          data-bs-target="#modifyModal">

        <i class="fa-solid fa-pen text-white"></i>
        </button>

      
      <button
        type="button"
        class="btn btn-danger rounded-0" id="${p.id}"
      >
        <i class="fa-solid fa-trash-can text-white"></i>
      </button>
    </div>
  </div>`;
    results.appendChild(card);
    const delbutton = document
      .getElementById(p.id)
      .addEventListener("click", () => delArticle(p));
    const modbutton = document
      .getElementById(p.name)
      .addEventListener("click", () => findArticle(p));
  });
};

// Funcion para borrar productos (Sale mal)
const delArticle = (product) => {
  const index = products.indexOf(product);
  products.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(products));
  updateResults();
};

const findArticle = (product) => {
  const index = products.indexOf(product);

  newIdModify.value = product.id;
  newNameModify.value = product.name;
  newPriceModify.value = product.price;
};

const upDateNewResults = () => {
  const index = products.findIndex(
    (product) => product.id === newIdModify.value
  );
    console.log(index)
  const product = (products[index] = {
    id: newIdModify.value,
    name: newNameModify.value,
    price: newPriceModify.value,
  });

  products.splice(index, 1, product);

  updateResults();
};

updateResults();
