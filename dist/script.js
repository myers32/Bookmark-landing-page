"use strict";var menu=function(){var e=document.querySelector(".header__nav--menu"),n=document.querySelector(".mobileMenu"),t=document.querySelector(".mobileMenu__nav--menu");e.addEventListener("click",(function(){n.classList.add("mobileMenu__open")})),t.addEventListener("click",(function(){n.classList.remove("mobileMenu__open")}))},bookmarkSection=document.querySelector(".bookmarkClick-js"),intelligentSection=document.querySelector(".intelligent-js"),shareBookmarksSection=document.querySelector(".shareBookmarks-js"),simpleButton=document.querySelector(".simpleButton-js"),speedyButton=document.querySelector(".speedyButton-js"),easyButton=document.querySelector(".easyButton-js"),changeUnderline=function(){simpleButton.addEventListener("click",(function(){simpleButton.classList.contains("has-underline")||(simpleButton.classList.add("has-underline"),speedyButton.classList.remove("has-underline"),easyButton.classList.remove("has-underline"))})),speedyButton.addEventListener("click",(function(){speedyButton.classList.contains("has-underline")||(simpleButton.classList.remove("has-underline"),speedyButton.classList.add("has-underline"),easyButton.classList.remove("has-underline"))})),easyButton.addEventListener("click",(function(){easyButton.classList.contains("has-underline")||(easyButton.classList.add("has-underline"),speedyButton.classList.remove("has-underline"),simpleButton.classList.remove("has-underline"))}))},changeDisplay=function(){simpleButton.addEventListener("click",(function(){simpleButton.classList.contains("has-underline")&&(bookmarkSection.classList.remove("not-visible"),intelligentSection.classList.add("not-visible"),shareBookmarksSection.classList.add("not-visible"))})),speedyButton.addEventListener("click",(function(){speedyButton.classList.contains("has-underline")&&(intelligentSection.classList.remove("not-visible"),bookmarkSection.classList.add("not-visible"),shareBookmarksSection.classList.add("not-visible"))})),easyButton.addEventListener("click",(function(){easyButton.classList.contains("has-underline")&&(shareBookmarksSection.classList.remove("not-visible"),bookmarkSection.classList.add("not-visible"),intelligentSection.classList.add("not-visible"))}))},accordion=function(){document.querySelectorAll(".faqs__accordion--item").forEach((function(e){e.addEventListener("click",(function(){e.classList.toggle("active")}))}))},init=function(){menu(),changeUnderline(),changeDisplay(),accordion()};init();
//# sourceMappingURL=script.js.map