(function () {


    let ladyPicture = document.querySelector('.lady__picture');
    let ladyText = document.querySelector('.lady__text');

    let header = document.querySelector('.header');
    let manPicture = document.querySelector('.man__picture');
    let manText = document.querySelector('.man__text');
    let navMenu = document.querySelector('.header__nav');
    let sliderBg = document.querySelector('.slider__container')

    // if (!navigator.userAgent.includes('Chrome')) {
    //     console.log('nen')
    //     header.classList.add('header-safari')
    // }

    sliderBg.addEventListener('click', function (e) {
        // if (navigator.userAgent.includes('Chrome')) {
        document.body.style.setProperty('--bg-picture', `url('../img/scroll${e.target.title}.jpg')  no-repeat`)
        window.scrollTo(0, 0);
        // }

    })

    window.addEventListener('scroll', function addLeftBlock(e) {
        if (window.pageYOffset >= 220) {

            ladyPicture.classList.add('lady__picture-visible')
            ladyText.classList.add('lady__text-visible')
        }

        if (window.pageYOffset <= 220) {
            ladyPicture.classList.remove('lady__picture-visible');
            header.classList.remove('fixedNav');
            manPicture.classList.remove('man__picture-visible');
            ladyText.classList.remove('lady__text-visible');
            manText.classList.remove('man__text-visible');
            navMenu.classList.add('displNone')
        }

        if (window.pageYOffset >= 600 && window.pageYOffset <= 1200) {
            header.classList.add('fixedNav')
            navMenu.classList.remove('displNone')
        }

        if (window.pageYOffset >= 650) {
            manPicture.classList.add('man__picture-visible')
        }

        if (window.pageYOffset >= 700) {
            manText.classList.add('man__text-visible')
        }

    })

}())