"use strict";var menu=function(){var e=document.querySelector(".header__nav--menu"),n=document.querySelector(".mobileMenu"),s=document.querySelector(".mobileMenu__nav--menu");e.addEventListener("click",(function(){n.classList.add("mobileMenu__open")})),s.addEventListener("click",(function(){n.classList.remove("mobileMenu__open")}))},bookmarks=function(){var e=document.querySelector(".simpleButton-js"),n=document.querySelector(".speedyButton-js"),s=document.querySelector(".easyButton-js");e.addEventListener("click",(function(){e.classList.contains("has-underline")||(e.classList.add("has-underline"),n.classList.remove("has-underline"),s.classList.remove("has-underline"))})),n.addEventListener("click",(function(){n.classList.contains("has-underline")||(e.classList.remove("has-underline"),n.classList.add("has-underline"),s.classList.remove("has-underline"))})),s.addEventListener("click",(function(){s.classList.contains("has-underline")||(s.classList.add("has-underline"),n.classList.remove("has-underline"),e.classList.remove("has-underline"))}))},init=function(){menu(),bookmarks()};init();
//# sourceMappingURL=script.js.map