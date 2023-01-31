import Swiper, { Navigation, Pagination } from 'swiper'
Swiper.use([Navigation, Pagination])

const swiperMedia = window.matchMedia('(max-width: 768px)')

function swiperInit(swiperMedia) {
  if (swiperMedia.matches) {
    const brandsSwiper = new Swiper('.brands__swiper', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      spaceBetween: 16,
      slidesPerView: 'auto',
      slidesOffsetAfter: 16,
      slidesOffsetBefore: 16,
    })

    const technicsSwiper = new Swiper('.technics__swiper', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      spaceBetween: 16,
      slidesPerView: 'auto',
      slidesOffsetAfter: 16,
      slidesOffsetBefore: 16,
    })

    const servicesSwiper = new Swiper('.services__swiper', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      spaceBetween: 16,
      slidesPerView: 'auto',
      slidesOffsetAfter: 16,
      slidesOffsetBefore: 16,
    })
  }
}

swiperInit(swiperMedia)