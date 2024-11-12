const button = document.getElementById('button');
const text1 = document.getElementById('text-1');
const text2 = document.getElementById('text-2');
const text3 = document.getElementById('text-3');
const text4 = document.getElementById('text-4');
const text5 = document.getElementById('text-5');
button.addEventListener('click', changeFun);
let counter = 6;
function changeFun() {
    counter += 1;
    let current = counter % 5;
    switch(current){
        case 1: {
            text1.style.display = 'block';
            text2.style.display = 'none';
            text3.style.display = 'none';
            text4.style.display = 'none';
            text5.style.display = 'none';
            text1.style.color = 'green';
            break;
        }
        case 2: {
            text1.style.display = 'none';
            text2.style.display = 'block';
            text3.style.display = 'none';
            text4.style.display = 'none';
            text5.style.display = 'none';
            text2.style.color = 'red';
            break;
        }
        case 3: {
            text1.style.display = 'none';
            text2.style.display = 'none';
            text3.style.display = 'block';
            text4.style.display = 'none';
            text5.style.display = 'none';
            text3.style.color = 'gray';
            break;
        }
        case 4: {
            text1.style.display = 'none';
            text2.style.display = 'none';
            text3.style.display = 'none';
            text4.style.display = 'block';
            text5.style.display = 'none';
            text4.style.color = 'blue';
            break;
        }
        case 0: {
            text1.style.display = 'none';
            text2.style.display = 'none';
            text3.style.display = 'none';
            text4.style.display = 'none';
            text5.style.display = 'block';
            text5.style.color = 'orange';
            break;
        }
    }
}