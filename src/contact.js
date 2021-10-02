const phone = document.createElement('h1');
const address = document.createElement('h1');
phone.textContent = '+886-2-1233456';
address.textContent = '71221 Taiwan, Tainan, Xiao Su Road, 687.';

const iframe = document.createElement('iframe');
iframe.src = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d918.1072787388692!2d120.2216158!3d23.0080113!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e76e61255bcbd%3A0xbbd2a730898c3fd!2z6ZaL5YWD6Lev54Sh5ZCN6Jmx55uu6a2aIOKApyDogonnh6Xpo68!5e0!3m2!1szh-TW!2stw!4v1633180142232!5m2!1szh-TW!2stw';
iframe.width = 600;
iframe.height = 450;

/**
 * @param {HTMLElement} main 
 * @param {HTMLButtonElement} contactBtn 
 */
function renderContact(main, contactBtn) {
    main.textContent = '';
    main.id = 'contact';
    document.querySelector('.active-tab').classList.remove('active-tab');
    contactBtn.classList.add('active-tab');

    main.appendChild(phone);
    main.appendChild(address);
    main.appendChild(iframe);
}

export { renderContact };