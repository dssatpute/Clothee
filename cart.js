var addToCart=document.querySelectorAll(".Deals .buy-deal")
console.log(addToCart)
var length=addToCart.length
for(var i=0;i<length;i++)
{
    var btn=addToCart[i]
    btn.addEventListener('click',()=>
    {
        console.log("clicked")
    })
}