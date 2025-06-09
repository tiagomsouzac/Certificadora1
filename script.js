document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        console.log('Conta criada com os seguintes dados:');
        console.log(data);

        alert(`Obrigado por se registrar, ${data.fullName}! (Dados exibidos no console)`);

        form.reset();
    });
});