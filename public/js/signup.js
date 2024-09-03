const signupBtn = document.querySelector('.btn');

const signup = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#icon_prefix').value.trim();
    const email = document.querySelector('#icon_email').value.trim();
    const password = document.querySelector('#icon_telephone').value.trim();

    if (username && password && email) {
        const response = await fetch('/api/users/signup', {
            method: 'POST',
            body: JSON.stringify({ username, password, email }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

signupBtn.addEventListener('click', signup);