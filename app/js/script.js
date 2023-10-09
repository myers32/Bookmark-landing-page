{
  const menu = () => {

    const buttonOpen = document.querySelector(".header__nav--menu");
    const mobileMenu = document.querySelector(".mobileMenu");
    const buttonClose = document.querySelector(".mobileMenu__nav--menu");

    buttonOpen.addEventListener("click", () => {
      mobileMenu.classList.add("mobileMenu__open");
    });

    buttonClose.addEventListener("click", () => {
      mobileMenu.classList.remove("mobileMenu__open");
    });
  };

  const bookmarkSection = document.querySelector(".bookmarkClick-js");
  const intelligentSection = document.querySelector(".intelligent-js");
  const shareBookmarksSection = document.querySelector(".shareBookmarks-js");

  const simpleButton = document.querySelector(".simpleButton-js");
  const speedyButton = document.querySelector(".speedyButton-js");
  const easyButton = document.querySelector(".easyButton-js");

  const changeUnderline = () => {

    simpleButton.addEventListener("click", () => {
      if (!simpleButton.classList.contains("has-underline")) {
        simpleButton.classList.add("has-underline");
        speedyButton.classList.remove("has-underline");
        easyButton.classList.remove("has-underline");
      };
    });

    speedyButton.addEventListener("click", () => {
      if (!speedyButton.classList.contains("has-underline")) {
        simpleButton.classList.remove("has-underline");
        speedyButton.classList.add("has-underline");
        easyButton.classList.remove("has-underline");
      };
    });

    easyButton.addEventListener("click", () => {
      if (!easyButton.classList.contains("has-underline")) {
        easyButton.classList.add("has-underline");
        speedyButton.classList.remove("has-underline");
        simpleButton.classList.remove("has-underline");
      };
    });
  };

  const changeDisplay = () => {

    simpleButton.addEventListener("click", () => {
      if (simpleButton.classList.contains("has-underline")) {
        bookmarkSection.classList.remove("not-visible");
        intelligentSection.classList.add("not-visible");
        shareBookmarksSection.classList.add("not-visible");
      };
    });

    speedyButton.addEventListener("click", () => {
      if (speedyButton.classList.contains("has-underline")) {
        intelligentSection.classList.remove("not-visible");
        bookmarkSection.classList.add("not-visible");
        shareBookmarksSection.classList.add("not-visible");
      };
    });

    easyButton.addEventListener("click", () => {
      if (easyButton.classList.contains("has-underline")) {
        shareBookmarksSection.classList.remove("not-visible");
        bookmarkSection.classList.add("not-visible");
        intelligentSection.classList.add("not-visible");
      };
    });
  };

  const accordion = () => {
    const faqs = document.querySelectorAll(".faqs__accordion--item");

    faqs.forEach(faq => {
      faq.addEventListener("click", () => {
        faq.classList.toggle("active");
      })
    })
  }

  const init = () => {
    menu();
    changeUnderline();
    changeDisplay();
    accordion();
  };

  init();
}