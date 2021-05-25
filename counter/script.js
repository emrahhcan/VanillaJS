let count = 0;
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

let currentValue = function(current) {
    value.textContent = current;
};
let valueColor = function(color) {
    value.style.color = color;
};

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const style = e.currentTarget.classList;
        
        // Counter Current Value
        if (style.contains('decrease'))  {
            count--;
            currentValue(count);
            
        }
        else if (style.contains('increase')) {
            count++;    
            currentValue(count);   
        }
        else {
            count = 0;
            currentValue(count);
        }
        
        // Counter Color
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