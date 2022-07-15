
 let mMenuOpener = document.querySelector(".mobile-menu-opener span");
 let mMenuColse = document.querySelector(".mMenu-close span");
 let mMenu = document.querySelector(".mobile-menu");
 let body = document.querySelector("body");


mMenuOpener.addEventListener("click", function(){
	mMenu.style.right = "0%";
},true)

mMenuColse.addEventListener("click", function(){
	mMenu.style.right = "-100%";
},true)

body.addEventListener("click", function(){
	mMenu.style.right = "-100%";

},true)

mMenu.addEventListener("click", function(){
	mMenu.style.right = "0%";

},true)