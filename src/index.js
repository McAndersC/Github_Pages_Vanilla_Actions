
import Glide from '@glidejs/glide';

console.log('Initializing app')

const glide = new Glide('.glide', {
    type: 'carousel',
    perView: 1,
    autoplay: 3000,
    startAt: 1,
})

glide.mount();

