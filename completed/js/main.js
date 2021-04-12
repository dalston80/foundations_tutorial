(function () {
    let menuBtn = document.querySelector(".menu-btn");
    let navMenu = document.querySelector(".nav-area nav ul");
    const mediaQuery = window.matchMedia("(min-width: 600px)");

    mediaQuery.addListener(handleMediaQuery);
    handleMediaQuery(mediaQuery);
    
    function handleMediaQuery(mq) {
        if (mq.matches) {
            if (navMenu.classList.contains("show-menu")) {
                navMenu.classList.remove("show-menu")
            }
        }
    }

    // Using arrow functions
    // menuBtn.addEventListener('click', (event) => {
    //     event.preventDefault();
    //     navMenu.classList.toggle('show-menu');
    // });

    menuBtn.addEventListener("click", function (event) {
        event.preventDefault();
        navMenu.classList.toggle("show-menu");
    });

})();