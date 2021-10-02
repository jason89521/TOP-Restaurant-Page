import './stylesheets/menu.css';
import steakImg from './images/steak.jpeg';
import chickenImg from './images/chicken.jpeg';
import porkImg from './images/pork.jpeg';
import fishImg from './images/fish.jpg';

function createDish(title, price, imgSrc) {
    const dish = document.createElement('div');
    dish.classList.add('dish');

    const img = new Image();
    img.src = imgSrc
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.textContent = title;
    const span = document.createElement('span');
    span.textContent = `NT$${price}`;
    div.appendChild(h1);
    div.appendChild(span);

    dish.appendChild(img);
    dish.appendChild(div);

    return dish;
}

/**
 * @param {HTMLElement} main 
 * @param {HTMLButtonElement} menuBtn 
 */
function renderMenu(main, menuBtn) {
    main.textContent = '';
    main.id = 'menu';
    document.querySelector('.active-tab').classList.remove('active-tab');
    menuBtn.classList.add('active-tab');

    main.appendChild(createDish('Steak', 569, steakImg));
    main.appendChild(createDish('Fish', 469, fishImg));
    main.appendChild(createDish('Pork', 339, porkImg));
    main.appendChild(createDish('Chicken', 399, chickenImg));
}

export {renderMenu};