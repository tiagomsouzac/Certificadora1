document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(loginForm);
        const data = Object.fromEntries(formData.entries());

        if (data.email && data.password) {
            console.log('Tentativa de login com os seguintes dados:');
            console.log(data);
            alert(`Bem-vindo de volta, ${data.email}!`);
        } else {
            alert('Por favor, preencha todos os campos.');
        }
        
        loginForm.reset();
    });
});