import '~@glidejs/glide/dist/css/glide.core.min.css';
import Glide from '@glidejs/glide';

console.log('Initializing app...sjjjjjjjFFFFFFFF')

const glide = new Glide('.glide', {
    type: 'carousel',
    perView: 1,
    autoplay: 3000,
    startAt: 1,
})

glide.mount();

