const pass = document.querySelector('.pass');
const showPass = document.querySelector('.showPass');

showPass.addEventListener('click', function () {
    if (pass.getAttribute('type') == 'password') {
        pass.setAttribute('type', 'text')
        showPass.innerHTML = 'Hide'
    }else {
        pass.setAttribute('type', 'password')
        showPass.innerHTML = 'Show'
    }
})