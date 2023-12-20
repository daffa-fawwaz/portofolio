const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list")

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
});

// CAROUSEL

const wrapper = document.querySelector(".content")
 carousel = document.querySelector(".carousel")
 images = document.querySelectorAll("img")
 buttons = document.querySelectorAll(".button")

 let imageIndex = 1,
   intervalid;

   const autoSlide = () => {
    intervalid = setInterval(() => slideImage(++imageIndex), 2000);

   }

   const slideImage = () => {
    carousel.style.transform = 'translate'
   }
//  console.log(wrapper,carousel,images,buttons)



