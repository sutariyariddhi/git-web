 import nav from "../components/nav.js"

document.getElementById("nav").innerHTML=nav()
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let totalprice = 0;
for (let i = 0; i < cart.length; i++) {
  totalprice += cart[i].price * cart[i].qty;
}

document.getElementById("price").innerHTML = `Total Price: ${totalprice}`;


{/* <div class="main-1">
        <div class="main-1-img">
          <img
            class="1-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYsQtoYKl7EgvDrtvTsDU5AJieKjtT_b2yiQ&usqp=CAU"
            alt=""
          />
        </div>
        <div class="main-1-2">
          <h1 class="main-2-h1">Apple juice</h1>
        </div>


        <div class="main-3">
          <p class="main-3-p1">+</p>
          <p class="main-3-p2">2</p>
          <p class="main-3-p3">-</p>
        </div>


        <div class="main-2">
     
            <h1 class="main-2-2h1">$2.99</h1>
      
        </div>
      </div> */}

let cartui=(cart)=>{

  cart.map((ele)=>{

let divimg=document.createElement("div");
let img=document.createElement("img");
img.src=ele.image

divimg.append(img)
divimg.setAttribute("class", "cart-img")

let namediv=document.createElement("div")
let name=document.createElement("h1")
name.innerHTML=ele.title

name.setAttribute("class", "title")
namediv.append(name)

namediv.setAttribute("class","title-main")



let qtydiv = document.createElement("div")
let minus=document.createElement("p")
minus.innerHTML="-"
let plus=document.createElement("p")
plus.innerHTML="+"
let qty=document.createElement("p")
qty.innerHTML=ele.qty



minus.setAttribute("class","plus")
plus.setAttribute("class","mines")
qty.setAttribute("class","num")
qtydiv.setAttribute("class","plus-mines")
qtydiv.append(minus,qty,plus)



let pricediv=document.createElement("div")
let price=document.createElement("h1")
price.innerHTML=ele.price
price.setAttribute("class", "price")
pricediv.append(price)
pricediv.setAttribute("class", "price-heading")

let del = document.createElement("del")
del.innerHTML = "delete"
del.addEventListener("click",function(event){
 event.target.parentNode.remove()
})

let parent=document.createElement("div")
parent.append(divimg,namediv,qtydiv,del,pricediv)

parent.setAttribute("class", "main")

document.querySelector("section").append(parent)
console.log(parent);
  })


}

cartui(cart)

