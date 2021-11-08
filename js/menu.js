const cardsMenu = document.querySelector(".cards-menu");

const changeTitle = (restaurant) => {
  const restaurantTitle = document.querySelector(".restaurant-title");
  restaurantTitle.textContent = restaurant.name;
};

const changeStars = (restaurant) => {
  const restaurantStars = document.querySelector(".rating");
  restaurantStars.textContent = restaurant.stars;
};

const changeMinPrice = (restaurant) => {
  const restaurantPrice = document.querySelector(".price");
  restaurantPrice.textContent = restaurant.price;
};

const changeCategory = (restaurant) => {
  const restaurantCategory = document.querySelector(".category");
  restaurantCategory.textContent = restaurant.kitchen;
};

const renderItems = (data) => {
  data.forEach(({ id, description, image, name, price }) => {
    const card = document.createElement("div");

    card.classList.add("card");

    card.innerHTML = `
              <img src="${image}" alt="${name}" class="card-image" />
              <div class="card-text">
                <div class="card-heading">
                  <h3 class="card-title card-title-reg">${name}</h3>
                </div>
                <div class="card-info">
                  <div class="ingredients">
                    ${description}
                  </div>
                </div>
                <div class="card-buttons">
                  <button class="button button-primary button-add-cart">
                    <span class="button-card-text">В корзину</span>
                    <span class="button-cart-svg"></span>
                  </button>
                  <strong class="card-price-bold">${price} ₽</strong>
                </div>
              </div>
    `;
    cardsMenu.append(card);
  });
};

if (localStorage.getItem("restaurant")) {
  const restaurant = JSON.parse(localStorage.getItem("restaurant"));

  changeTitle(restaurant);
  changeStars(restaurant);
  changeMinPrice(restaurant);
  changeCategory(restaurant);

  fetch(`https://test-83cae-default-rtdb.firebaseio.com/db/${restaurant.products}`)
    .then((response) => response.json())
    .then((data) => {
      renderItems(data);
    })
    .catch((error) => {
      console.log(error);
    });
} else {
  window.location.href = "/";
}
