var carousel = document.querySelector('.carousel');
var catalog = document.querySelector('.catalog');
var prod;
var button;
var image;
var prodName;
var price;
var products = {
  11111: {
    name: 'cherry',
    color: 'red',
    image: 'images/cherry.jpg',
    price: 100,
    type: 'berrys'
  },
  22222: {
    name: 'lemon',
    color: 'yellow',
    image: 'images/lemon.jpg',
    price: 80,
    type: 'fruits'
  },
  33333: {
    name: 'orange',
    color: 'orange',
    image: 'images/orange.jpg',
    price: 150,
    type: 'fruits'
  },
  44444: {
    name: 'apple',
    color: 'green',
    image: 'images/apple.jpg',
    price: 200,
    type: 'fruits'
  },
  55555: {
    name: 'eggplant',
    color: 'violet',
    image: 'images/eggplant.jpg',
    price: 180,
    type: 'vegetables'
  },
  66666: {
    name: 'pumpkin',
    color: 'orange',
    image: 'images/pumpkin.jpg',
    price: 400,
    type: 'vegetables'
  },
  77777: {
    name: 'tomato',
    color: 'red',
    image: 'images/tomato.jpg',
    price: 340,
    type: 'berrys'
  },
  88888: {
    name: 'strawberry',
    color: 'red',
    image: 'images/strawberry.jpg',
    price: 140,
    type: 'berrys'
  }
}
//каталог
for (var key in products) {
  prod = document.createElement('li');
  prod.classList = 'catalog__item' + ' ' + products[key].type;
  button = document.createElement('button');
  button.className = 'catalog__button';
  button.innerText = 'Купить';
  button.setAttribute('data-id', [key])
  image = document.createElement('img');
  image.className = 'catalog__image';
  image.src = products[key].image;
  image.alt = products[key].name;
  price = document.createElement('span');
  price.className = 'catalog__price';
  price.innerHTML = products[key].price + ' rub';
  prodName = document.createElement('h3');
  prodName.className = 'catalog__title';
  prodName.innerText = products[key].name;
  catalog.appendChild(prod);
  prod.appendChild(prodName);
  prod.appendChild(price);
  prod.appendChild(image);
  prod.appendChild(button);
}

//корзина
var itemBox = document.querySelectorAll('.catalog__item'), // блок каждого товара
  cart = document.getElementById('cart'); // блок вывода данных корзины
// Функция кроссбраузерной установка обработчика событий
function addEvent(elem, type, handler) {
  if (elem.addEventListener) {
    elem.addEventListener(type, handler, false);
  } else {
    elem.attachEvent('on' + type, function () { handler.call(elem); });
  }
  return false;
}
// Получаем данные из LocalStorage
function getCartData() {
  return JSON.parse(localStorage.getItem('cart'));
}
// Записываем данные в LocalStorage
function setCartData(o) {
  localStorage.setItem('cart', JSON.stringify(o));
  return false;
}
// Добавляем товар в корзину
function addToCart(e) {
  var cartData = getCartData() || {}, // получаем данные корзины или создаём новый объект, если данных еще нет
    parentBox = this.parentNode, // родительский элемент кнопки "Купить"
    itemId = this.getAttribute('data-id'), // ID товара
    itemTitle = parentBox.querySelector('.catalog__title').innerHTML,
    itemPrice = parentBox.querySelector('.catalog__price').innerHTML;
  if (cartData.hasOwnProperty(itemId)) { // если такой товар уже в корзине, то добавляем +1 к его количеству
    cartData[itemId][2]++
  } else { // если товара в корзине еще нет, то добавляем в объект
    cartData[itemId] = [itemTitle, itemPrice, 1];
  }
  if (!setCartData(cartData)) { // Обновляем данные в LocalStorage
  }
  return false;
}
// Обработчик события на каждую кнопку "Добавить в корзину"
for (var i = 0; i < itemBox.length; i++) {
  addEvent(itemBox[i].querySelector('.catalog__button'), 'click', addToCart);
}
// Открыть корзину со списком добавленных товаров
function openCart(e) {
  var cartData = getCartData(); // выводим все данные корзины
  var totalItems;
  // если что-то в корзине уже есть, добавить данные 
  if (cartData !== null) {
    totalItems = '<table class="shopping__list"><tr><th>Товар</th><th>Цена</th><th>Кол-во</th><th>Сумма</th></tr>';
    for (var items in cartData) {
      totalItems += '<tr>';
      cartData[items][3] = parseInt(cartData[items][1]) * cartData[items][2] //сумма по каждой позиции
      for (var i = 0; i < cartData[items].length; i++) {
        totalItems += '<td>' + cartData[items][i] + '</td>';
      }
      totalItems += '</tr>';
    }
    totalItems += '</table>';
    totalItems += '<td>' + '<tr>' + 'Итого' + cartData[items][3] + '</tr>' + '</td>';
    cart.innerHTML = totalItems;
  } else {
    // если в корзине пусто
    cart.innerHTML = 'В корзине пусто!';
  }
  return false;
}
/* Открыть корзину */
addEvent(document.getElementById('checkout'), 'click', openCart);
/* Очистить корзину */
addEvent(document.getElementById('clear_cart'), 'click', function (e) {
  localStorage.removeItem('cart');
  cart.innerHTML = 'Корзина пуста.';
});

// var basket = {
// };
// document.onclick = event => {
//   if (event.target.classList.contains('catalog__button')) {
//     addFunction(event.target.dataset.id);
//   }
// }

// const addFunction = id => {
//   basket[id]++;
//   basket[id] = products[id].name;
//   basket['price'] = products[id].price;
//   renderBasket();
// }

// const renderBasket = () => {
//   console.log(basket);
// }
// renderBasket()


// var basketSum = 0;
// for (var i = 0; i < basket.length; i++) {
//   basketSum += products[basket[i].Id].price * basket[i].count;
// }



// карусель
var offset = 0;
const slider = document.querySelector('.catalog');

document.querySelector('.slider__next').addEventListener('click', function () {
  offset += 152;
  if (offset > 1064) {
    offset = 0;
  }
  slider.style.left = -offset + 'px';
})
document.querySelector('.slider__prew').addEventListener('click', function () {
  offset -= 152;
  if (offset < 0) {
    offset = 1064;
  }
  slider.style.left = -offset + 'px';
})