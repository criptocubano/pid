const menuEmail = document.querySelector(".navbar-email");
const productDetailCloseIcon = document.querySelector(".product-detail-close");
const desktopMenu = document.querySelector(".desktop-menu");
const menuCartIcon = document.querySelector(".navbar-shopping-cart");
const menuHamIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const cardsContainer = document.querySelector(".cards-container");
const productDetailContainer = document.querySelector("#productDetail");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCartIcon.addEventListener("click", toggleCart);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside);

function toggleDesktopMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains("inactive");
  if (!isAsideClosed) {
    shoppingCartContainer.classList.add("inactive");
  }

  desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu() {
  const isAsideClosed = shoppingCartContainer.classList.contains("inactive");
  if (!isAsideClosed) {
    shoppingCartContainer.classList.add("inactive");
  }
  closeProductDetailAside();

  mobileMenu.classList.toggle("inactive");
}

function toggleCart() {
  const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
  if (!isMobileMenuClosed) {
    mobileMenu.classList.add("inactive");
  }
  const isDesktopMenuClosed = desktopMenu.classList.contains("inactive");
  if (!isDesktopMenuClosed) {
    desktopMenu.classList.add("inactive");
  }
  const isProductDetailClosed =
    productDetailContainer.classList.contains("inactive");
  if (!isProductDetailClosed) {
    productDetailContainer.classList.add("inactive");
  }

  shoppingCartContainer.classList.toggle("inactive");
}

function openProductDetailAside() {
  shoppingCartContainer.classList.add("inactive");
  productDetailContainer.classList.remove("inactive");
}

function closeProductDetailAside() {
  productDetailContainer.classList.add("inactive");
}

const productList = [];
productList.push({
  name: "Pegatinas",
  price: 12,
  image:
    "https://ae-pic-a1.aliexpress-media.com/kf/H221454f2eaac46c1b84a75a534ff69e9i/10x10cm-Hunter-X-Hunter-Gon-y-Killua-Anime-pegatina-de-coche-decoraci-n-motocicleta-todoterreno-port.jpg_640x640Q90.jpg_.webp",
});
productList.push({
  name: "Tshirt",
  price: 30,
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR2aP_Gqv1FXHAhbLw-XN58pEwmoez1dU_xQ&s",
});
productList.push({
  name: "bike",
  price: 120,
  image:
    "https://m.media-amazon.com/images/I/61no2rosekL.jpg",
});

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    // product= {name, price, image} -> product.image
    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
    productImg.addEventListener("click", openProductDetailAside);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "$" + product.price;
    const productName = document.createElement("p");
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement("figure");
    const productImgCart = document.createElement("img");
    productImgCart.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);
