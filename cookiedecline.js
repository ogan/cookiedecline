(function() {
    const buttons = document.querySelectorAll('button');
    for (let i = 0; i < buttons.length; i++) {
        const btn = buttons[i];
        if (btn.innerText.toLowerCase().includes('necessary') || btn.innerText.toLowerCase().includes('decline')) {
            btn.click();
            break;
        }
    }
})();
