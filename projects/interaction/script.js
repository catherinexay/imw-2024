console.log("p3: interaction");


// moving shape - first step - figuring out how to move a shape with my cursor using hover method
// var move = document.querySelector('.move');

// move.addEventListener('mouseover', moveCursor);

// function moveCursor() {

//     move.addEventListener('mousemove', mousemove);
//     console.log("it is moving");
//     function mousemove(e) {
//         // - 100 makes the cursor to in center of square
//         var x = e.clientX - 100 + 'px';
//         var y = e.clientY - 100 + 'px';
//         this.style.left = x;
//         this.style.top = y;
//         // shape changes colour if you hover over it
//         this.style.background = 'black';
//     }
// }

// how to make the gradient div FOLLOW the cursor
$(document).mousemove(function (e) {
    var mouseX = e.pageX;
    var mouseY = e.pageY;
    // var pointer = $('.pointer');

    // console.log(mouseX, mouseY);

    $('.pointer').css({ left: mouseX, top: mouseY });
    // $('.rectangle').css({ left: mouseX, top: mouseY });

});


// rgb for rectangles
function randomRGB() {
    const r = Math.floor(20 + Math.random() * 256);
    const g = Math.floor(20 + Math.random() * 256);
    const b = Math.floor(20 + Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

// formatting the rectangles
const rows = 10;
const columns = 17;
// let directionChange = 0;

const container = document.getElementById('container');

const rectangleWidth = container.clientWidth / columns;
const rectangleHeight = container.clientHeight / rows;


let count = 1;


// for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < columns; j++) {
//         const rectangle = document.createElement('div');
//         rectangle.classList.add('rectangle');

//         // rectangle.style.backgroundColor = randomRGB();
//         rectangle.textContent = count;

// first iteration - based on its assigned count, apply colour to it

//         if ((j) % 3 === 0) {
//             rectangle.style.backgroundColor = 'red'; 
//         } else {
//             rectangle.style.backgroundColor = randomRGB();

//         }

//         container.appendChild(rectangle);
//     }
// }

// shuffling the count so that the order is random rather than in order of 1... 2... 3..
function shuffleArray() {
    const numbers = Array.from({ length: rows * columns }, (_, index) => index + 1);
    for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
    return numbers;
    // console.log(numbers);
}

function createRectangle(number) {
    // const rectangle = document.createElement('div');
    // rectangle.classList.add('rectangle');

    const shuffledNumbers = shuffleArray();
    shuffledNumbers.forEach(number => {

        // assigning count to rectangles 
        const rectangle = document.createElement('div');
        rectangle.classList.add('rectangle');
        rectangle.textContent = number;
        // numbers don't show up on squares
        rectangle.classList.add('transparent-text');

        rectangle.style.backgroundColor = randomRGB();
        container.appendChild(rectangle);
    });
    count++;
}

// for drawing rect
for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {

        // this ensures the rectangles have their assigned colours when hovered over
        createRectangle(count);

        if (count % columns === 1) {
            // Add spacing for new row
            const spacer = document.createElement('div');

            spacer.style.width = '100%';
            spacer.style.height = '0';

            container.appendChild(spacer);
        }
    }
}

// HOVER
function fadeOutRectangle(event) {
    // event.target.style.opacity = '0';
    const rectangleIndex = parseInt(event.target.textContent);
    // console.log(rectangleIndex);
    const remainder = rectangleIndex % 3;

    const rectangle = event.target;
    rectangle.style.width = 'calc(11vh - 2px)';
    rectangle.style.height = 'calc(11vh - 2px)';

    if (remainder === 0) {
        event.target.style.backgroundColor = 'blue';
    }
    else if (remainder === 1) {
        event.target.style.backgroundColor = 'red';
    } else if (remainder === 2) {
        event.target.style.backgroundColor = 'yellow';
    }
    else {
        event.target.style.backgroundColor = randomRGB();
    }
}

function fadeInRectangle(event) {
    event.target.style.opacity = '1';

    const rectangle = event.target;
    rectangle.style.width = 'calc(10vh - 2px)';
    rectangle.style.height = 'calc(10vh - 2px)';

    // changes colour
    // event.target.style.backgroundColor = randomRGB();
}

// function hoverChange(event) {
//     event.target.style.backgroundColor = randomRGB();
// }


function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

function selfScroll(event) {
    const cursorPositionY = event.clientY;
    const cursorPositionX = event.clientX;

    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;

    const threshold = 0.03 * window.innerHeight;

    const bottomThreshold = viewportHeight - threshold;
    const rightThreshold = viewportWidth - 2 * threshold;

    // console.log(cursorPositionX, rightThreshold);

    // Cursor near bottom
    if (cursorPositionY > bottomThreshold) {
        // Apply random color to rectangles
        const rectangles = document.querySelectorAll('.rectangle');
        rectangles.forEach(rectangle => {
            rectangle.style.backgroundColor = randomRGB();
        });
    }

    // Cursor near right side of window
    if (cursorPositionX > rightThreshold) {
        const rectangles = document.querySelectorAll('.rectangle');
        rectangles.forEach(rectangle => {
            rectangle.style.opacity = 0;
        });
    }

}

const debouncedSelfScroll = debounce(selfScroll, 3);

// kinda laggy
// document.addEventListener('mousemove', selfScroll);

document.addEventListener('mousemove', debouncedSelfScroll);

const rectangles = document.querySelectorAll('.rectangle');
rectangles.forEach(rectangle => {
    rectangle.addEventListener('mouseenter', fadeOutRectangle);
    rectangle.addEventListener('mouseleave', fadeInRectangle);
    // rectangle.addEventListener('mouseover', fadeInRectangle);

});
