
document.getElementById('submit').addEventListener('click', (event) => {
    let userName = document.getElementById('userName').value;
    let password = document.getElementById('password').value;
    if (userName.length < 1 && password.length < 1) {
        alert('username or password should not be empty')
    }
    else if (userName.length < 1) {
        alert('username should be filled');
    }
    else if (password.length < 1) {
        alert('password should be filled');
    }
    else {
        alert(`${userName} submitted successfully`);
    }
})
