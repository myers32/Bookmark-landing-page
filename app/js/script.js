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



  const bookmarks = () => {

    const simpleButton = document.querySelector(".simpleButton-js");
    const speedyButton = document.querySelector(".speedyButton-js");
    const easyButton = document.querySelector(".easyButton-js");

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
  }

  const init = () => {
    menu();
    bookmarks();
  }

  init();
}