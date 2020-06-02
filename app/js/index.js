(function () {

    window.onload = function () {
        setTimeout(function () {
            window.scrollTo(0, 0);
        }, 0);
    }

    let ladyContainer = document.querySelector('.lady');
    let ladyPicture = document.querySelector('.lady__picture');
    let ladyText = document.querySelector('.lady__text');

    let header = document.querySelector('.header');
    let manContainer = document.querySelector('.man');
    let manPicture = document.querySelector('.man__picture');
    let manText = document.querySelector('.man__text');
    let mainHeader = document.querySelector('header');
    let navMenu = document.querySelector('.header__nav');



    window.addEventListener('scroll', function addLeftBlock(e) {
        console.dir(e.path[1].pageYOffset)
        if (e.path[1].pageYOffset >= 220 && e.path[1].pageYOffset <= 300) {

            ladyPicture.classList.add('lady__picture-visible')
            ladyText.classList.add('lady__text-visible')
            mainHeader.classList.add('header-scroll')
        }

        if (e.path[1].pageYOffset <= 220) {
            ladyPicture.classList.remove('lady__picture-visible');
            header.classList.remove('fixedNav');
            manPicture.classList.remove('man__picture-visible');
            ladyText.classList.remove('lady__text-visible');
            manText.classList.remove('man__text-visible');
            mainHeader.classList.remove('header-scroll');
            navMenu.classList.add('displNone')
        }

        if (e.path[1].pageYOffset >= 600 && e.path[1].pageYOffset <= 1200) {
            header.classList.add('fixedNav')
            navMenu.classList.remove('displNone')
        }

        if (e.path[1].pageYOffset >= 650) {
            manPicture.classList.add('man__picture-visible')
        }

        if (e.path[1].pageYOffset >= 700) {
            manText.classList.add('man__text-visible')
        }

    })

}())