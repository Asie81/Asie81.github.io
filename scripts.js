// Задаем массив доступных типов ёлок
var treeTypes = [
  {
    id: 1,
    name: 'Ель'
  },
  {
    id: 2,
    name: 'Сосна'
  },
  {
    id: 3,
    name: 'Дуб'
  }
];

// Объект, представляющий корзину с покупками
var cart = {
  items: [],

  addItem: function(tree) {
    this.items.push(tree);
  },

  getItemsCount: function() {
    return this.items.length;
  }
};

// Функция для обработки нажатия кнопки "Добавить в корзину"
function addToCart() {
  console.log("Товар добавлен в корзину");
}

// Функция для обработки нажатия кнопки "Купить"
function buyTree() {
  var treeSelect = document.getElementById("treeSelect");
  var selectedTreeId = parseInt(treeSelect.value);

  addToCart(); // Вызов функции addToCart()

  // Находим выбранную ёлку
  var selectedTree = treeTypes.find(function(tree) {
    return tree.id === selectedTreeId;
  });

  // Добавляем ёлку в корзину
  cart.addItem(selectedTree);

  var cartElement = document.getElementById("cart");
  cartElement.innerHTML = "Вы добавили в корзину: " + selectedTree.name + " 🌲";
}

// Инициализация
function init() {
  var treeSelect = document.getElementById("treeSelect");

  // Добавляем опции выбора ёлок на страницу
  treeTypes.forEach(function(tree) {
    var option = document.createElement("option");
    option.value = tree.id;
    option.text = tree.name;
    treeSelect.appendChild(option);
  });

  var buyButton = document.getElementById("buyButton");
  buyButton.addEventListener("click", buyTree);
}

// Вызываем инициализацию после загрузки страницы
window.addEventListener("DOMContentLoaded", init);