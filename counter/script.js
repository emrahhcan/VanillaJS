const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');
let count = 0;

let currentValue = function(current) {
    value.textContent = current;
};
let valueColor = function(color) {
    value.style.color = color;
};

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const style = e.currentTarget.classList;

        if (style.contains('decrease'))  {
            count--;
            currentValue(count);
        }
        else if (style.contains('increase')) {
            count++;    
            currentValue(count);   
        }
        else if(style.contains('multiply')) {
            count *= 2;
            currentValue(count);
        }
        else if(style.contains('divide')) {
            count /= 2;
            currentValue(count);
        }
        else {
            count = 0;
            currentValue(count);
        }
        
        if (count < 0) {
            valueColor('red');
        }
        if (count > 0) {
            valueColor('green');
        }
        if (count === 0) {
            valueColor('black');
        }
    });
});