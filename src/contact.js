/**
 * @param {HTMLDivElement} content 
 * @param {HTMLButtonElement} contactBtn 
 */
function renderContact(content, contactBtn) {
    content.textContent = '';
    document.querySelector('.active-tab').classList.remove('active-tab');
    contactBtn.classList.add('active-tab');
}

export {renderContact};