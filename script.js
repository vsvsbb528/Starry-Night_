document.addEventListener('DOMContentLoaded', function() {
    var button1 = document.querySelector('.button1');
    button1.addEventListener('click', function() {
        window.location.href = 'index.html';
    });

    var button2 = document.querySelector('.button2');
    button2.addEventListener('click', function() {
        window.location.href = 'aboutus.html';
    });

    var button3 = document.querySelector('.button3');
    button3.addEventListener('click', function() {
        window.location.href = 'contact.html';
    });

    const text1 = document.querySelector('.text1');
    let toggle = true;
    setInterval(function() {
        text1.classList.add('fade');
        setTimeout(function() {
            text1.textContent = toggle ? "Make it Smarter" : "Make it Easier";
            text1.classList.remove('fade');
            toggle = !toggle;
        }, 500);
    }, 2500);
});