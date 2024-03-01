console.log("hello world");

// changing blue to white
// similar to css but instead of colon it is a comma
$('body').css('background-color', 'white');

// let text = 'Hello';


// $('.background').hide();


// for the blocks 
for (let i = 0; i < 360; i++) {
    // this symbol allows you to put variables
    let block = `<div style=" width: ${i}px; height: 100vw; background-color: hsl(${i}, 100%, 50%);"></div>`;

    $('.foreground').append(block);
    // if you're selecting class or background need to have dot

}

$('div').each(function () {
    // console.log(this);

    $(this).on('mouseenter', function () {
        $(this).addClass('no-width');
    })
    // EFFECT as you hover over the blocks they dissapear and eventually white space is left
    $(this).fadeIn(10, function () {
        console.log("fade");
    })
})

console.log($('div').height());

$('body').on('keypress', function () {
    let currentHeight = $('div').height();

    let randNumber = Math.random(1) * currentHeight;

    $('div').slideDown("slow");
    $('div').removeClass('no-width');

    $('div').height(randNumber);
    console.log(randNumber);
})