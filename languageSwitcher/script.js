'use strict'
let contentLang = {
    'turkish': {
        'title': 'Türkçe',
        'content': 'JavaScript\'i seviyorum!'
    },
    'english': { 
        'title': 'English',
        'content': 'I love JavaScript!'
    },
    'chinese': {
        'title': '中國人',
        'content': '我愛JavaScript!'
    }
};
const langs = document.querySelector('.languages');
const links = document.querySelectorAll('a');
const titleHtml = document.querySelector('.title');
const contentHtml = document.querySelector('.content');

links.forEach(choosen => {
    choosen.addEventListener('click', () => {
        langs.querySelector('.active').classList.remove('active');
        choosen.classList.add('active');

        const attr = choosen.getAttribute('language');
        titleHtml.textContent = contentLang[attr].title;
        contentHtml.textContent = contentLang[attr].content;
    });
    
});