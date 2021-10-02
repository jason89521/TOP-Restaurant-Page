import './stylesheets/home.css';
import restaurantImage from './images/restaurant.jpeg';

const h1 = document.createElement('h1');
h1.textContent = 'Simple Restaurant';
const img = new Image();
img.src = restaurantImage;
const firstP = document.createElement('p');
firstP.textContent = 'We believe food is the most loyalty friend, ' + 
'just hop in and feel it, combined with local ingredients ' + 
'and modern asian style, served with our love, that’s Simple.';
const secondP = document.createElement('p');
secondP.textContent = 'Michelin Guide Taipei 2018/2019/2020/2021';

/**
 * @param {HTMLElement} main 
 * @param {HTMLButtonElement} homeBtn
 */
function renderHome(main, homeBtn) {
    main.textContent = '';
    document.querySelector('.active-tab').classList.remove('active-tab');
    homeBtn.classList.add('active-tab');
    main.appendChild(h1);
    main.appendChild(img);
    main.appendChild(firstP);
    main.appendChild(secondP);
    main.id = 'home';
}

export {renderHome};