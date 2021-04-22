const Slides = document.getElementsByClassName("carousel-item");
const len = Slides.length;
let currentSlide = 0;

document.querySelector(".next").addEventListener("click", () => {
  nextSlide();
});
document.querySelector(".previous").addEventListener("click", () => {
  prevSlide();
});

function prevSlide() {
  if (currentSlide === 0) {
    currentSlide = len - 1;
  } else {
    currentSlide--;
  }
  updateSlidePosition();
}

function nextSlide() {
  if (currentSlide === len - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  updateSlidePosition();
}

function updateSlidePosition() {
  for (let slide of Slides) {
    slide.classList.remove("carousel-item-visible");
    slide.classList.add("carousel-item-hidden");
  }

  Slides[currentSlide].classList.add("carousel-item-visible");
}

// CART

// const addToCartBtn=document.querySelectorAll(".add-to-cart")
// const cartContents=document.querySelector(".cart-contents")
// const goToCarts=document.querySelector(".go-to-cart")
// const cart=document.querySelector(".cart")
// const closeCart=document.querySelector(".close-cart")
// let cartItem=document.querySelector(".cart-item")
// let result=''

// for(var i=0;i<addToCartBtn.length;i++)
// {


//   var btnPressed=addToCartBtn[i]
//   let cartBtnParent=addToCartBtn[i].parentElement
//   let cartContainer=cartBtnParent.parentElement
//   let cartImage=cartBtnParent.querySelector(".product-image").src
//   let cartItemName=cartContainer.querySelector(".product-name").innerText
//   let cartItemPrice=cartContainer.querySelector(".product-price").innerText


//   btnPressed.addEventListener('click',function(event)
//   {
//     event.target
//     let cartItem=document.createElement("div")
//     cartItem.innerHTML=
//     `
//        <div class="cart-items">
//           <img src=${cartImage} alt="" class="cart-item-image">
//           <div>
//             <p class="cart-item-name">${cartItemName}</p>
//             <p class="cart-item-price">${cartItemPrice}</p>
//           </div>
//           <div>
//             <i class="fas fa-chevron-up"></i>
//             <span class="cart-item-quantity">15</span>
//             <i class="fas fa-chevron-down"></i>
//           </div>
//         </div>`

//         cartContents.appendChild(cartItem)
//         //  console.log(cartItem)
//   })

// }

// goToCarts.addEventListener("click",function()
// {
//     cart.classList.add("cart-show")
    
// })
// closeCart.addEventListener("click",function()
// {
//   cart.classList.remove("cart-show")
// })

