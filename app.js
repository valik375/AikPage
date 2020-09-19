document.body.onload = function() {
    setTimeout( function() {
      let preloader = document.querySelector('.preloader'),
          rocket = document.querySelector('#rocket')
      if(!preloader.classList.contains('done')){
        preloader.classList.add('done');
        rocket.classList.add('rocket-animation')
      }
    }, 1000);
}

const animItem = document.querySelector('.step-line')
const blockAnim = document.querySelector('.steps-container')

window.addEventListener('scroll', () => {

    const topOffsetAnim = blockAnim.offsetTop - '200';

    if(window.scrollY >= topOffsetAnim){
        animItem.classList.add("line-active");
      }else {
        animItem.classList.remove("line-active");
      }
})

window.addEventListener("scroll", () => {
    const navBar = document.querySelector("nav");
    const topOffset = navBar.offsetTop;
  
      if(window.scrollY == topOffset){
        navBar.classList.remove("scrolling");
      } else {
        navBar.classList.add("scrolling");
      }
  });

const init = () => {
    const doc = document;

    const burger = doc.querySelector('.burger'),
          menu = doc.querySelector('.menu-toggle'),
          menuItems = doc.querySelectorAll('.menu-item a'),
          socialBtn = doc.querySelector('.social-fixed'),
          social = doc.querySelector('.social-container'),
          socialBtnImg = doc.querySelector('.social-fixed img'),
          socialBtnP = doc.querySelector('.cloase-image'),
          popupContainer = doc.querySelector('.popup-info'),
          popupBtnCloase = doc.querySelector('.popup-close'),
          popupBtn = doc.querySelector('.popup-btn');

    popupBtn.addEventListener('click', () => {
      popupContainer.classList.add('popup-active')
    })

    popupBtnCloase.addEventListener('click', () => {
      popupContainer.classList.remove('popup-active')
    })

    


    burger.addEventListener('click', () => {
        menu.classList.toggle('menu-active')
        burger.classList.toggle('toggle')
    })

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menu.classList.toggle('menu-active')
            burger.classList.toggle('toggle')
        })
    })

    socialBtn.addEventListener('click', () => {
        social.classList.toggle('social-container-active');
        socialBtn.classList.toggle('social-container-active');
        socialBtnImg.classList.toggle('image-hiden')
        socialBtnP.classList.toggle('social-container-active')
    })

}

init();