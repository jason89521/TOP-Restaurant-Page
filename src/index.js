import { nav, navBtns, main, buildStructure } from './structure';
import { renderHome } from './home';
import { renderMenu } from './menu';
import { renderContact } from './contact';

const content = document.createElement('div');
content.id = 'content';

buildStructure(content);
renderHome(main, navBtns[0]);

nav.addEventListener('click', (event) => {
    if (event.target.nodeName === "BUTTON") {
        const tabName = event.target.textContent;
        switch (tabName) {
            case 'Home':
                renderHome(main, navBtns[0]);
                break;
            case 'Menu':
                renderMenu(main, navBtns[1]);
                break;
            case 'Contact':
                renderContact(main, navBtns[2]);
                break;
        }
    }
});