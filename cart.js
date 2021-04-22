const clearCart = document.querySelector(".buy-cart-item");
const addToCartBtn = document.querySelectorAll(".add-to-cart");
const closeCart = document.querySelector(".close-cart");
const cartTotal = document.querySelector(".cart-total");
const cartItemQuantity = document.querySelector(".cart-item-quantity ");
const cartContents = document.querySelector(".cart-contents");
const cartDOM = document.querySelector(".cart-item");
const dealDOM = document.querySelector(".deal-items");
const cartMain = document.querySelector(".cart");
const goToCart = document.querySelector(".go-to-cart");
const footer=document.querySelector(".footer")
// console.log(cartTotal)
let cart = [];


class Product {
  static async getProducts() {
    let result = await fetch("products.json");
    let data = await result.json();
    let items = data.items;
    let reval = items.map((item) => {
      const { title, price } = item.fields;
      const { id } = item.sys;
      const image = item.fields.image.fields.file.url;
      return { title, price, image, id };
    });
    return reval;
  }
}

class UI {
  static setUI(data) {
    let result = "";
    data.forEach((data) => {
      result += `
      <div class="product-container">
                <div class="image-container">
                    <img src="${data.image}" alt="" class="product-image" />
                    <button class="add-to-cart" data-id=${data.id}><i class="fas fa-cart-plus"></i></button>
                </div>
                <h3 class="product-name">${data.title}</h3>
                <h4 class="product-price">$${data.price}</h4>
        </div>
                `;
    });
    dealDOM.innerHTML = result;
  }

  addToCartBtn() {
    const btns = [...document.querySelectorAll(".add-to-cart")];
    btns.forEach((btn) => {
      let id = btn.dataset.id;
      console.log(id);
      let inCart = cart.find((cartItem) => {
        cartItem.id === id;
      });

      if (inCart) {
        btn.disabled = true;
      } else {
        // btn.innerText = "In Cart";
        // btn.disabled = true;
        btn.addEventListener("click", (event) => {
          btn.disabled = true;
          let res = { ...Storage.getItem(id), amount: 1 };
          cart = [...cart, res];
          Storage.saveCart(cart);
          this.setCartAmts(cart);
          this.addToCart(cart)
        });
      }
    });
  }

  setCartAmts(cart) {
    let total = 0;
    cart.map((item) => {
      total += item.price * item.amount;
    });

    cartTotal.innerText = parseFloat(total.toFixed(2));
    console.log(total);
  }

  addToCart(cart) {
    var cartItem = document.createElement("div");
    cart.forEach((element) => {
      cartItem.innerHTML = `
          <img src="${element.image}" alt="" class="cart-item-image">
          <div>
            <h3>${element.title}</h3>
            <h4>${element.price}</h4>
            <span class="remove-item">Remove item</span>
          </div>
          <div>
            <i class="fas fa-chevron-up"></i>
            <h4 class="cart-item-quantity">${element.amount}</h4>
            <i class="fas fa-chevron-down"></i>
          </div>
          `;
           cartItem.classList.add("cart-item");
           cartContents.insertBefore(cartItem,footer)
          // cartContents.appendChild(cartItem)
           
    });
    
    console.log(cartContents);
  }
}

class Storage {
  static setStorage(data) {
    localStorage.setItem("products", JSON.stringify(data));
  }

  static getItem(id) {
    let item = JSON.parse(localStorage.getItem("products"));
    return item.find((element) => {
      if (element.id === id) {
        return element;
      }
    });
  }

  static saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const obj = new UI();
  Product.getProducts()
    .then((data) => {
      UI.setUI(data);
      Storage.setStorage(data);
    })
    .then(() => {
      obj.addToCartBtn();
    });
});

goToCart.addEventListener("click", () => {
  cartMain.classList.add("cart-visibility");
  cartContents.classList.add("show-cart");

});

closeCart.addEventListener("click", () => {
  cartMain.classList.remove("cart-visibility");
  cartContents.classList.remove("show-cart");
});
// clearCart.addEventListener("click",()=>
// {
//   cartItem.innerText=""
//   cartTotal.innerText="0.00"
// })
// document.addEventListener("click",()=>
// {
//   cartMain.classList.remove("cart-visibility");
//   cartContents.classList.remove("show-cart");
// })