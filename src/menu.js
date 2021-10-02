/**
 * @param {HTMLDivElement} content 
 * @param {HTMLButtonElement} menuBtn 
 */
function renderMenu(content, menuBtn) {
    content.textContent = '';
    document.querySelector('.active-tab').classList.remove('active-tab');
    menuBtn.classList.add('active-tab');
}

export {renderMenu};