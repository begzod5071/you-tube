var $_ = function (selector, node = document) {
  return node.querySelector(selector);
};

// var elIdish = $_('.idish');
// var elButton = $_('button', elIdish);

var $$_ = function (selector, node = document) {
  return node.querySelectorAll(selector);
};

var createElement = function (element, elementClass, text) {
  var newElement = document.createElement(element);

  if (elementClass) {
    newElement.setAttribute('class', elementClass);
  }

  if (text) {
    newElement.textContent = text;
  }

  return newElement;
};





var elArrayDollie = [{
    img: 'img/video-img-1.png',
    duration: '4:15',
    title: 'A Brief History Of Creation',
    seen: '80k views  ·  3 days ago',
    by: 'Dollie Blair',
    watchlater: 'img/watch.svg'
  },
  {
    img: 'img/video-img-2.png',
    duration: '8:00',
    title: 'Selecting The Right Hotel',
    seen: '123k views  ·  1 months ago',
    by: 'Dollie Blair',
    watchlater: 'img/watch.svg'
  },
  {
    img: 'img/video-img-3.png',
    duration: '5:32',
    title: 'Asteroids',
    seen: '43k views  ·  12 days ago',
    by: 'Dollie Blair',
    watchlater: 'img/watch.svg'
  },
  {
    img: 'img/video-img-4.png',
    duration: '6:40',
    title: 'Telescopes 101',
    seen: '11k views  ·  6 months ago',
    by: 'Dollie Blair',
    watchlater: 'img/watch.svg'
  },
  {
    img: 'img/video-img-5.png',
    duration: '1:45',
    title: 'Medical Care Is Just',
    seen: '18k views  ·  2 days ago',
    by: 'Dollie Blair',
    watchlater: 'img/watch.svg'
  },
  {
    img: 'img/Cover.png',
    duration: '2:12',
    title: 'Moon Gazing',
    seen: '67k views  ·  4 months ago',
    by: 'Dollie Blair',
    watchlater: 'img/watch.svg'
  }
];



var elToggle = document.querySelector(".site-header__menu");
var elSitenav = document.querySelector(".sitenav");

elToggle.addEventListener("click", function () {
  elSitenav.classList.toggle("sitenav--open")
});

var elListDollie = $_('.user-videos__list');
var elTemplateDollie = $_('.user-videos__template').content;
var elDollieFragment = document.createDocumentFragment();
elArrayDollie.forEach(function (item) {

  var newItem = elTemplateDollie.cloneNode(true);
  $_('.user-videos__item-img', newItem).src = item.img;
  $_('.user-videos__item-span', newItem).textContent = item.duration;
  $_('.user-videos__item-title', newItem).textContent = item.title;
  $_('.user-videos__text', newItem).textContent = item.seen;
  $_('.user-videos__by', newItem).textContent = item.by;
  $_('.user-videos__watch-later-img', newItem).src = item.watchlater;

  elDollieFragment.appendChild(newItem);

  elListDollie.appendChild(elDollieFragment)
});

var elRecommendedList = $_('.user-videos__recommended-list');
var elRecommendedTemplate = $_('.user-videos__recommended-template').content;
var elRecommendFragment = document.createDocumentFragment()
var recommendedArrey = [{
    img: 'img/recommend-img-1.png',
    duration: '3:40',
    title: 'Dude You Re Getting A Telescope',
    seen: '34k views  ·  5 months ago',
    by: 'Gussie French',
    watchlater: 'img/watch.svg'
  },
  {
    img: 'img/recommend-img-2.png',
    duration: '2:12',
    title: 'Moon Gazing',
    seen: '54k views  ·  11 months ago',
    by: 'Edward Osborne',
    watchlater: 'img/watch.svg'
  },
  {
    img: 'img/recommend-img-3.png',
    duration: '2:12',
    title: 'Moon Gazing',
    seen: '125k views  ·  4 months ago',
    by: 'Dollie Blair',
    watchlater: 'img/watch.svg'
  }
];
recommendedArrey.forEach(function (recommend) {
  var recommendItem = elRecommendedTemplate.cloneNode(true);

  $_('.user-videos__item-img', recommendItem).src = recommend.img;
  $_('.user-videos__item-span--recommended', recommendItem).textContent = recommend.duration;
  $_('.user-videos__item-title', recommendItem).textContent = recommend.title;
  $_('.user-videos__text', recommendItem).textContent = recommend.seen;
  $_('.user-videos__user', recommendItem).textContent = recommend.by;
  $_('.user-videos__watch-later-img', recommendItem).src = recommend.watchlater;

  elRecommendFragment.appendChild(recommendItem);
  elRecommendedList.appendChild(elRecommendFragment)
});

var elFoodList = $_('.user-videos__list--food');
var elFoodTemplate = $_('.user-videos__food-template').content;

var foodArray = [{
  img: 'img/food-img-1.png',
  duration: '7:36',
  title: 'Astronomy Or Astrology',
  seen: '240k views  ·  4 months ago',
  by: 'Food & Drink',
  watchlater: 'img/watch.svg'
},
{
  img: 'img/food-img-2.png',
  duration: '2:19',
  title: 'Advertising Outdoors',
  seen: '13k views  ·  15 days ago',
  by: 'Food & Drink',
  watchlater: 'img/watch.svg'
},
{
  img: 'img/food-img-3.png',
  duration: '9:05',
  title: 'Radio Astronomy',
  seen: '1k views  ·  11 months ago',
  by: 'Food & Drink',
  watchlater: 'img/watch.svg'
},
{
  img: 'img/food-img-4.png',
  duration: '3:40',
  title: 'A Good Autoresponder',
  seen: '45k views  ·  2 months ago',
  by: 'Food & Drink',
  watchlater: 'img/watch.svg'
},
{
  img: 'img/food-img-5.png',
  duration: '1:56',
  title: 'Baby Monitor Technology',
  seen: '86k views  ·  7 days ago',
  by: 'Food & Drink',
  watchlater: 'img/watch.svg'
},
{
  img: 'img/food-img-6.png',
  duration: '4:15',
  title: 'Asteroids',
  seen: '123k views  ·  4 months ago',
  by: 'Dollie Blair',
  watchlater: 'img/watch.svg'
},
];
var elFoodFragment = document.createDocumentFragment();
foodArray.forEach(function (food){
  var foodItem =  elFoodTemplate.cloneNode(true);

  $_('.user-videos__item-img--food', foodItem).src = food.img;
  $_('.user-videos__item-span--food', foodItem).textContent = food.duration;
  $_('.user-videos__item-title--food', foodItem).textContent = food.title;
  $_('.user-videos__text--food', foodItem).textContent = food.seen;
  $_('.user-videos__by--food', foodItem).textContent = food.by;

  elFoodFragment.appendChild(foodItem);
  elFoodList.appendChild(elFoodFragment);
});
