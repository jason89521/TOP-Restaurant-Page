import './stylesheets/index.css';

const header = document.createElement('header');
const nav = document.createElement('nav');
const navBtns = [];

const main = document.createElement('main');

/**
 * @param {HTMLDivElement} content 
 */
function buildStructure(content) {
    for (let i = 0; i < 3; i++) {
        const btn = document.createElement('button');
        btn.className = (i === 0) ? 'tab active-tab' : 'tab';
        navBtns.push(btn);
        nav.appendChild(btn);
    }
    navBtns[0].textContent = 'Home';
    navBtns[1].textContent = 'Menu';
    navBtns[2].textContent = 'Contact';
    header.appendChild(nav);

    content.appendChild(header);
    content.appendChild(main);

    document.body.appendChild(content);
}

export { header, nav, navBtns, main, buildStructure};