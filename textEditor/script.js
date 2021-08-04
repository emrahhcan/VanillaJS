'use strict';

const buttons = document.querySelectorAll('button');
let showTheCode = false;

textField.document.designMode = 'on';
for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        let cmd = buttons[i].getAttribute('data-cmd');

        if(buttons[i].name === 'active') {
            buttons[i].classList.toggle('active');
        }

        if(cmd === 'insertImage' || cmd === 'createLink') {
            let url = prompt('Enter link here:', '');
            textField.document.execCommand(cmd, false, url);

            if(cmd === 'insertImage') {
                const imgs = textField.document.querySelectorAll('img');
                
                imgs.forEach(item => {
                    item.style.maxWidth = '500px'; 
                })
            } else {
                const links = textField.document.querySelectorAll('a');

                links.forEach(item => {
                    item.target = '_blank';

                    item.addEventListener('mouseover', () => {
                        textField.document.designMode = 'off';
                    });
                    item.addEventListener('mouseout', () => {
                        textField.document.designMode = 'on';
                    });
                })
            }
        } else {
            textField.document.execCommand(cmd, false, null);
        }

        if(cmd === 'showCode') {
            const textBody = textField.document.querySelector('body');
            if(showTheCode){
                textBody.innerHTML = textBody.textContent;
                showTheCode = false;
            } else {
                textBody.textContent = textBody.innerHTML;
                showTheCode = true;
            }
        }
    });
}