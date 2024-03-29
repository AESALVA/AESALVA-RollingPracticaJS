// Agrego array de objetos con datos que vamos a utilizar
const MOCKED_DATA = [
  {
    name: "CR90 corvette",
    model: "CR90 corvette",
    manufacturer: "Corellian Engineering Corporation",
    cost_in_credits: "3500",
    length: "150",
    max_atmosphering_speed: "950",
    crew: "30-165",
    passengers: "600",
    cargo_capacity: "3000000",
    consumables: "1 year",
    hyperdrive_rating: "2.0",
    MGLT: "60",
    starship_class: "corvette",
    pilots: [],
    films: [
      "https://swapi.dev/api/films/1/",
      "https://swapi.dev/api/films/3/",
      "https://swapi.dev/api/films/6/",
    ],
    created: "2014-12-10T14:20:33.369000Z",
    edited: "2014-12-20T21:23:49.867000Z",
    url: "https://swapi.dev/api/starships/2/",
  },
  {
    name: "Star Destroyer",
    model: "Imperial I-class Star Destroyer",
    manufacturer: "Kuat Drive Yards",
    cost_in_credits: "15000",
    length: "1,600",
    max_atmosphering_speed: "975",
    crew: "47,060",
    passengers: "n/a",
    cargo_capacity: "36000000",
    consumables: "2 years",
    hyperdrive_rating: "2.0",
    MGLT: "60",
    starship_class: "Star Destroyer",
    pilots: [],
    films: [
      "https://swapi.dev/api/films/1/",
      "https://swapi.dev/api/films/2/",
      "https://swapi.dev/api/films/3/",
    ],
    created: "2014-12-10T15:08:19.848000Z",
    edited: "2014-12-20T21:23:49.870000Z",
    url: "https://swapi.dev/api/starships/3/",
  },
  {
    name: "Sentinel-class landing craft",
    model: "Sentinel-class landing craft",
    manufacturer: "Sienar Fleet Systems, Cyngus Spaceworks",
    cost_in_credits: "2400",
    length: "38",
    max_atmosphering_speed: "1000",
    crew: "5",
    passengers: "75",
    cargo_capacity: "180000",
    consumables: "1 month",
    hyperdrive_rating: "1.0",
    MGLT: "70",
    starship_class: "landing craft",
    pilots: [],
    films: ["https://swapi.dev/api/films/1/"],
    created: "2014-12-10T15:48:00.586000Z",
    edited: "2014-12-20T21:23:49.873000Z",
    url: "https://swapi.dev/api/starships/5/",
  },
  {
    name: "Death Star",
    model: "DS-1 Orbital Battle Station",
    manufacturer:
      "Imperial Department of Military Research, Sienar Fleet Systems",
    cost_in_credits: "10000",
    length: "120000",
    max_atmosphering_speed: "n/a",
    crew: "342,953",
    passengers: "843,342",
    cargo_capacity: "1000000000000",
    consumables: "3 years",
    hyperdrive_rating: "4.0",
    MGLT: "10",
    starship_class: "Deep Space Mobile Battlestation",
    pilots: [],
    films: ["https://swapi.dev/api/films/1/"],
    created: "2014-12-10T16:36:50.509000Z",
    edited: "2014-12-20T21:26:24.783000Z",
    url: "https://swapi.dev/api/starships/9/",
  },
  {
    name: "Millennium Falcon",
    model: "YT-1300 light freighter",
    manufacturer: "Corellian Engineering Corporation",
    cost_in_credits: "1000",
    length: "34.37",
    max_atmosphering_speed: "1050",
    crew: "4",
    passengers: "6",
    cargo_capacity: "100000",
    consumables: "2 months",
    hyperdrive_rating: "0.5",
    MGLT: "75",
    starship_class: "Light freighter",
    pilots: [
      "https://swapi.dev/api/people/13/",
      "https://swapi.dev/api/people/14/",
      "https://swapi.dev/api/people/25/",
      "https://swapi.dev/api/people/31/",
    ],
    films: [
      "https://swapi.dev/api/films/1/",
      "https://swapi.dev/api/films/2/",
      "https://swapi.dev/api/films/3/",
    ],
    created: "2014-12-10T16:59:45.094000Z",
    edited: "2014-12-20T21:23:49.880000Z",
    url: "https://swapi.dev/api/starships/10/",
  },
  {
    name: "Y-wing",
    model: "BTL Y-wing",
    manufacturer: "Koensayr Manufacturing",
    cost_in_credits: "1350",
    length: "14",
    max_atmosphering_speed: "1000km",
    crew: "2",
    passengers: "0",
    cargo_capacity: "110",
    consumables: "1 week",
    hyperdrive_rating: "1.0",
    MGLT: "80",
    starship_class: "assault starfighter",
    pilots: [],
    films: [
      "https://swapi.dev/api/films/1/",
      "https://swapi.dev/api/films/2/",
      "https://swapi.dev/api/films/3/",
    ],
    created: "2014-12-12T11:00:39.817000Z",
    edited: "2014-12-20T21:23:49.883000Z",
    url: "https://swapi.dev/api/starships/11/",
  },
  {
    name: "X-wing",
    model: "T-65 X-wing",
    manufacturer: "Incom Corporation",
    cost_in_credits: "1499",
    length: "12.5",
    max_atmosphering_speed: "1050",
    crew: "1",
    passengers: "0",
    cargo_capacity: "110",
    consumables: "1 week",
    hyperdrive_rating: "1.0",
    MGLT: "100",
    starship_class: "Starfighter",
    pilots: [
      "https://swapi.dev/api/people/1/",
      "https://swapi.dev/api/people/9/",
      "https://swapi.dev/api/people/18/",
      "https://swapi.dev/api/people/19/",
    ],
    films: [
      "https://swapi.dev/api/films/1/",
      "https://swapi.dev/api/films/2/",
      "https://swapi.dev/api/films/3/",
    ],
    created: "2014-12-12T11:19:05.340000Z",
    edited: "2014-12-20T21:23:49.886000Z",
    url: "https://swapi.dev/api/starships/12/",
  },
  {
    name: "TIE Advanced x1",
    model: "Twin Ion Engine Advanced x1",
    manufacturer: "Sienar Fleet Systems",
    cost_in_credits: "10000",
    length: "9.2",
    max_atmosphering_speed: "1200",
    crew: "1",
    passengers: "0",
    cargo_capacity: "150",
    consumables: "5 days",
    hyperdrive_rating: "1.0",
    MGLT: "105",
    starship_class: "Starfighter",
    pilots: ["https://swapi.dev/api/people/4/"],
    films: ["https://swapi.dev/api/films/1/"],
    created: "2014-12-12T11:21:32.991000Z",
    edited: "2014-12-20T21:23:49.889000Z",
    url: "https://swapi.dev/api/starships/13/",
  },
  {
    name: "Executor",
    model: "Executor-class star dreadnought",
    manufacturer: "Kuat Drive Yards, Fondor Shipyards",
    cost_in_credits: "11435",
    length: "19000",
    max_atmosphering_speed: "n/a",
    crew: "279,144",
    passengers: "38000",
    cargo_capacity: "250000000",
    consumables: "6 years",
    hyperdrive_rating: "2.0",
    MGLT: "40",
    starship_class: "Star dreadnought",
    pilots: [],
    films: ["https://swapi.dev/api/films/2/", "https://swapi.dev/api/films/3/"],
    created: "2014-12-15T12:31:42.547000Z",
    edited: "2014-12-20T21:23:49.893000Z",
    url: "https://swapi.dev/api/starships/15/",
  },
  {
    name: "Rebel transport",
    model: "GR-75 medium transport",
    manufacturer: "Gallofree Yards, Inc.",
    cost_in_credits: "12000",
    length: "90",
    max_atmosphering_speed: "650",
    crew: "6",
    passengers: "90",
    cargo_capacity: "19000000",
    consumables: "6 months",
    hyperdrive_rating: "4.0",
    MGLT: "20",
    starship_class: "Medium transport",
    pilots: [],
    films: ["https://swapi.dev/api/films/2/", "https://swapi.dev/api/films/3/"],
    created: "2014-12-15T12:34:52.264000Z",
    edited: "2014-12-20T21:23:49.895000Z",
    url: "https://swapi.dev/api/starships/17/",
  },
];

// Tomo el control de los divs con JS
const cart = document.getElementById("cart");
const catalogue = document.getElementById("catalogue");
const total = document.getElementById("total");
const btnClear = document
  .getElementById("btn-clear")
  .addEventListener("click", () => clearCart());
const btnCart = document.getElementById("btn-trigger");

// Inicializando el carrito vacio

let cartContent = [];

// Creo una funcion para mostrar las cards
function createCards(data, id, needsButton) {
  data.forEach((d) => {
    // Creación con JS de card de bootstrap
    let card = document.createElement("div");
    card.className = `col border border-2 border-${
      id === catalogue ? "primary" : "secondary"
    } p-2 bg-light`;

    let cardContent = document.createElement("div");
    cardContent.className = "card h-100";

    let cardBody = document.createElement("div");
    cardBody.className = "card-body";

    let cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.innerHTML = d.name;

    let cardText = document.createElement("p");
    cardText.className = "card-text bold-test";
    cardText.innerHTML = `Price: $ ${d.cost_in_credits}`;

    let cardButton = document.createElement("button");
    cardButton.className = "btn btn-outline-primary";
    cardButton.innerHTML = "Buy";
    cardButton.onclick = () => {
      const exist = cartContent.some((p) => p.name === d.name);
      if (!exist) {
        d.q = 1;
        cartContent.push(d);
      } else {
        const index = cartContent.indexOf(d);
        cartContent[index].q++;
      }

      createCardsCart();
    };

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    if (needsButton) {
      cardBody.appendChild(cardButton);
    }
    cardContent.appendChild(cardBody);
    card.appendChild(cardContent);

    id.appendChild(card);
  });
}

createCards(MOCKED_DATA, catalogue, true);

function createCardsCart() {
  // Creación con JS de card de bootstrap en el cartContent
  cart.innerHTML = "";
  total.innerText = "";
  let cartTotal = 0;
  cartContent.forEach((d) => {
    let card = document.createElement("div");
    card.className = `col border border-2 border-secondary p-2 bg-light`;
    card.innerHTML;

    let cardContent = document.createElement("div");
    cardContent.className = "card h-100";

    let cardBody = document.createElement("div");
    cardBody.className = "card-body";

    let cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.innerHTML = d.name;

    let cardText = document.createElement("p");
    cardText.className = "card-text bold-test";
    cardText.innerHTML = `Price: $ ${d.cost_in_credits}`;

    let cantities = document.createElement("p");
    cantities.className = "card-cantities d-flex";
    cantities.innerHTML = "Cantidad: ";
    cardText.append(cantities);

    let units = document.createElement("p");
    units.className = "card-units";
    units.innerHTML = `${d.q}`;
    cardText.appendChild(units);

    let subTotal = document.createElement("p");
    subTotal.className = "card-subtotal";
    subTotal.innerHTML = `SubTotal: $ ${d.q * d.cost_in_credits}`;
    cardText.appendChild(subTotal);

    let deletebutton = document.createElement("button");
    deletebutton.className = "delete-button btn btn-outline-danger";
    deletebutton.innerHTML = "Delete";
    cardText.append(deletebutton);
    deletebutton.addEventListener("click", () => del(d));

    cartTotal = cartTotal + d.q * d.cost_in_credits;
    total.innerText = `(Total $ ${cartTotal})`;

    btnCart.className = "btn btn-outline-warning mt-3";
   
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardContent.appendChild(cardBody);
    card.appendChild(cardContent);

    cart.appendChild(card);
  });
}

function del(d) {
  const index = cartContent.indexOf(d);
  if (cartContent[index].q === 1) {
    cartContent.splice(index, 1);
  } else {
    cartContent[index].q--;
  }
  if (cartContent.length === 0) {
    btnCart.className = "btn btn-outline-primary mt-3";
  }
  createCardsCart();

}

function clearCart() {
  cartContent = [];
  total.innerText = "";
  createCardsCart();
  btnCart.className = "btn btn-outline-primary mt-3";
}
