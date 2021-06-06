'use strict';

let languages = document.querySelector('.languages');
const links = document.querySelectorAll('a');

const modalTitle = document.getElementById('modalTitle');
const content1 = document.getElementById('content1');
const content2 = document.getElementById('content2');
const content3 = document.getElementById('content3');
const content4 = document.getElementById('content4');
const howToPlay = document.querySelector('.howTo');
const retryHtml = document.querySelector('.rtr');
const scoreHtml = document.querySelector('.score');
const defHtml = document.querySelector('.def');
const def2Html = document.querySelector('.def2');
const checkHtml = document.querySelector('.check');
const counterHtml = document.querySelector('.counter');

let contentLanguage = {
    'english' : {
        'modalTitle': 'How to Play?',
        'content1': 'You need to guess a number between 1-20 to be able to play this game.',
        'content2': 'Don\'t forget that above 20 are invalid numbers, and negative numbers are not included which means you might lose your one of your guess chances. Let\'s see how lucky you are!',
        'content3': 'You can tap/press "Enter" to guess the number whether you use mobile or not. Also, you can tap anywhere (For Mobile), or press "Escape" be able to get rid of this page.',
        'content4': 'Good Luck :)',
        'howTo': 'How to Play?',
        'rtr': 'Again',
        'score': 'Highscore',
        'def': 'Guess the Lucky Number',
        'def2': 'Between 1-20',
        'check': 'Check',
        'counter': 'Guess Left'
    },
    'turkish' : {
        'modalTitle': 'Nasıl Oynanır?',
        'content1': 'Bu oyunu oynamak için 1 ile 20 arasında bir sayı tahmin etmelisin.',
        'content2': '20\'nin üzerindeki, ve negatif sayılar dahil değildir. Yani her yanlış girişte tahmin hakkını kaybedebilirsin. Bakalım ne kadar şanslısın!',
        'content3': 'Mobile kullansanda, kullanmasanda sayıyı tahmin etmek için "Enter" tuşuna basabilirsin. Ayrıca, bu sayfadan çıkmak için herhangi bir yere dokunabilir(Mobil İçin) veya "Escape" tuşuna basabilirsin.',
        'content4': 'İyi Şanslar :)',
        'howTo': 'Nasıl Oynanır?',
        'rtr': 'Tekrar',
        'score': 'Skor',
        'def': '1 ile 20 Arasında ki',
        'def2': 'Şanslı Rakamı Tahmin Et',
        'check': 'Kontrol Et',
        'counter': 'Hakkın Kaldı!'
    }
};

links.forEach(choosenLanguage => {
    choosenLanguage.addEventListener('click', () => {
        languages.querySelector('.active').classList.remove('active');
        choosenLanguage.classList.add('active');

        const attribute = choosenLanguage.getAttribute('language');

        modalTitle.textContent = contentLanguage[attribute].modalTitle;
        content1.textContent = contentLanguage[attribute].content1;
        content2.textContent = contentLanguage[attribute].content2;
        content3.textContent = contentLanguage[attribute].content3;
        content4.textContent = contentLanguage[attribute].content4;
        howToPlay.textContent = contentLanguage[attribute].howTo;
        retryHtml.textContent = contentLanguage[attribute].rtr;
        scoreHtml.textContent = contentLanguage[attribute].score;
        defHtml.textContent = contentLanguage[attribute].def;
        def2Html.textContent = contentLanguage[attribute].def2;
        checkHtml.textContent = contentLanguage[attribute].check;
        counterHtml.textContent = contentLanguage[attribute].counter;
    });
});