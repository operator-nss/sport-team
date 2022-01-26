/*
Документация по работе в шаблоне:
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, {
   Navigation,
   Pagination
} from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay,
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

function getDirection() {
   let windowWidth = window.innerWidth;
   let direction = windowWidth <= 768 ? 'horizontal' : 'vertical';

   return direction;
}

// Инициализация слайдеров
function initSliders() {
   // Перечень слайдеров
   if (document.querySelector('.mainslider__slider')) {
      let newSwiper = new Swiper('.mainslider__slider', {
         // Подключаем модули слайдера
         // для конкретного случая
         modules: [Navigation, Pagination],
         /*
         effect: 'fade',
         autoplay: {
         	delay: 3000,
         	disableOnInteraction: false,
         },
         */
         direction: getDirection(),
         observer: true,
         observeParents: true,
         slidesPerView: 1,
         spaceBetween: 300,
         autoHeight: false,
         speed: 800,
         //touchRatio: 0,
         //simulateTouch: false,
         loop: true,
         //preloadImages: false,
         //lazy: true,
         // Dotts
         pagination: {
            el: '.mainslider-pagination',
            clickable: true,
         },
         // Arrows
         navigation: {
            nextEl: '.mainslider-button-next',
            // prevEl: '.about__more .more__item_prev',
         },

         breakpoints: {
            320: {
               // slidesPerView: 1,
               // spaceBetween: 0,
               // autoHeight: true,
            },
            768: {
               // slidesPerView: 2,
               spaceBetween: 300,
            },
            992: {
               // slidesPerView: 3,
               // spaceBetween: 20,

            },
            1268: {
               // slidesPerView: 4,
               // spaceBetween: 30,
            },
         },

         on: {
            resize: function () {
               newSwiper.changeDirection(getDirection(),true);
               // let mainsliderPagination = document.querySelector('.mainslider-pagination');
               // console.dir(mainsliderPagination);

               // if (mainsliderPagination.classList.contains('.swiper-pagination-vertical')) {
               //    console.log('yes');
               // }

            }
         }
      });
   }


   if (document.querySelector('.media__slider')) {
      new Swiper('.media__slider', {
         // Подключаем модули слайдера
         // для конкретного случая
         modules: [Navigation],
         /*
         effect: 'fade',
         autoplay: {
         	delay: 3000,
         	disableOnInteraction: false,
         },
         */
         direction: 'horizontal',
         observer: true,
         observeParents: true,
         slidesPerView: 'auto',
         spaceBetween: 40,
         autoHeight: false,
         speed: 800,
         //touchRatio: 0,
         //simulateTouch: false,
         loop: true,
         //preloadImages: false,
         //lazy: true,
         // Dotts
         // pagination: {
         //    el: '.mainslider-pagination',
         //    clickable: true,
         // },
         // Arrows
         navigation: {
            nextEl: '.navigation-media__next',
            prevEl: '.navigation-media__prev',
         },

         // breakpoints: {
         //    320: {
         //       // slidesPerView: 1,
         //       // spaceBetween: 0,
         //       // autoHeight: true,
         //    },
         //    768: {
         //       // slidesPerView: 2,
         //    },
         //    992: {
         //       // slidesPerView: 3,
         //       // spaceBetween: 20,

         //    },
         //    1268: {
         //       // slidesPerView: 4,
         //       // spaceBetween: 30,
         //    },
         // },

         on: {


            }

      });
   }

   if (document.querySelector('.partnership__slider')) {
      new Swiper('.partnership__slider', {
         // Подключаем модули слайдера
         // для конкретного случая
         modules: [Navigation],
         /*
         effect: 'fade',
         autoplay: {
         	delay: 3000,
         	disableOnInteraction: false,
         },
         */
         direction: 'horizontal',
         observer: true,
         observeParents: true,
         slidesPerView: 2,
         spaceBetween: 40,
         autoHeight: false,
         speed: 800,
         //touchRatio: 0,
         //simulateTouch: false,
         loop: true,
         //preloadImages: false,
         //lazy: true,
         // Dotts
         // pagination: {
         //    el: '.mainslider-pagination',
         //    clickable: true,
         // },
         // Arrows
         navigation: {
            nextEl: '.partnership-button__next',
            prevEl: '.partnership-button__prev',
         },

         breakpoints: {
            320: {
               slidesPerView: 1,
               // spaceBetween: 0,
               // autoHeight: true,
            },
            768: {
               slidesPerView: 2,
            },
            992: {
               // slidesPerView: 3,
               // spaceBetween: 20,

            },
            1268: {
               // slidesPerView: 4,
               // spaceBetween: 30,
            },
         },

         on: {


            }

      });
   }


   // if (document.querySelector('.body-tabs-calendar-month')) {
   //     new Swiper('.body-tabs-calendar-month', {
   //       // Подключаем модули слайдера
   //       // для конкретного случая
   //       modules: [Navigation],
   //       /*
   //       effect: 'fade',
   //       autoplay: {
   //       	delay: 3000,
   //       	disableOnInteraction: false,
   //       },
   //       */
   //       direction: 'horizontal',
   //       observer: true,
   //       observeParents: true,
   //       slidesPerView: 1,
   //       spaceBetween: 50,
   //       autoHeight: false,
   //       speed: 800,
   //       //touchRatio: 0,
   //       //simulateTouch: false,
   //       loop: true,
   //       //preloadImages: false,
   //       //lazy: true,
   //       // Dotts
   //       // pagination: {
   //       //    el: '.mainslider-pagination',
   //       //    clickable: true,
   //       // },
   //       // Arrows
   //       // navigation: {
   //       //    nextEl: '.mainslider-button-next',
   //       //    // prevEl: '.about__more .more__item_prev',
   //       // },

   //       // breakpoints: {
   //       //    320: {
   //       //       // slidesPerView: 1,
   //       //       // spaceBetween: 0,
   //       //       // autoHeight: true,
   //       //    },
   //       //    768: {
   //       //       // slidesPerView: 2,
   //       //       spaceBetween: 300,
   //       //    },
   //       //    992: {
   //       //       // slidesPerView: 3,
   //       //       // spaceBetween: 20,

   //       //    },
   //       //    1268: {
   //       //       // slidesPerView: 4,
   //       //       // spaceBetween: 30,
   //       //    },
   //       // },

   //       // on: {
   //       //    resize: function () {
   //       //       // init1();/

   //       //    }
   //       // }
   //    });
   // }
}












// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
   // Добавление классов слайдера
   // при необходимости отключить
   bildSliders();

   let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
   if (sliderScrollItems.length > 0) {
      for (let index = 0; index < sliderScrollItems.length; index++) {
         const sliderScrollItem = sliderScrollItems[index];
         const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
         const sliderScroll = new Swiper(sliderScrollItem, {
            observer: true,
            observeParents: true,
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: {
               enabled: true,
            },
            scrollbar: {
               el: sliderScrollBar,
               draggable: true,
               snapOnRelease: false
            },
            mousewheel: {
               releaseOnEdges: true,
            },
         });
         sliderScroll.scrollbar.updateSize();
      }
   }
}

window.addEventListener("load", function (e) {
   // Запуск инициализации слайдеров
   initSliders();
   // Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
   //initSlidersScroll();
});
