import Glide from '@glidejs/glide';

const glide = new Glide('.glide', {
    type: 'carousel',
    perView: 1,
    autoplay: 3000,
    startAt: 1,
})

glide.mount();