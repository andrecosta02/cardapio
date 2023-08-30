let boxMenu = document.getElementById('boxMenu')


const list = [{
        id: 1,
        product: "Brigadeiro",
        path: "imagens/lasanha.jpg",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        price: "25,00",

    },
    {
        id: 2,
        product: "Beijinho",
        path: "imagens/macarrao.png",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        price: "15,00",
    },
    {
        id: 3,
        product: "Hamburguer",
        path: "imagens/hamburguer.jpg",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        price: "17,00",
    },
    {
        id: 4,
        product: "Peixe Frito",
        path: "imagens/peixefrito.jpg",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        price: "20,00",
    },
    {
        id: 5,
        product: "Parmegiana",
        path: "imagens/parmegianafrango.jpg",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        price: "18,00",
    },
    {
        id: 6,
        product: "Arrumadinho",
        path: "imagens/arrumadinho.jpg",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        price: "25,00",
    },


    /*{
        product: "",
        Emoji: "",
        price: 0,
        Quantity: 0,
        Unit: "",
    },*/
];


// ${list.product}:

//Mostra todos os Produtos, valores e cria os botões
const ShowProdutcNames = (users) => {
    users.forEach((list) => {

        boxMenu.innerHTML += (`

        <section class="card">
            <div class="divFoto">
                <img src="${list.path}" alt="" class="foto">
            </div>

            <div class="prato">
                <h2>${list.product}</h2>
                <h3>R$ ${list.price}</h3>
                <p>${list.description}</p>
            </div>
        </section>

        `)

    });
}
ShowProdutcNames(list)


// let rodape = document.getElementById('rodape')
// function clickMenu() {
//     rodape.style.display == 'block'
// }
// clickMenu()






const changeThemeBtn = document.querySelector("#change-theme")

// Carrega o lightmode
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

// Carrega de lightmode para darkmode
function loadTheme() {
  const darkMode = localStorage.getItem("dark");

  if (darkMode) {
    toggleDarkMode();
  }
}
loadTheme();

changeThemeBtn.addEventListener("change", function () {
  toggleDarkMode();

  // Carrega ou remove o darkmode conforme o localstorage
  localStorage.removeItem("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("dark", 1);
  }
});
