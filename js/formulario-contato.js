document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#contato form");
    const feedback = document.getElementById("mensagem-feedback");

    form.addEventListener("submit", function (event) {
        const nome = form.querySelector('input[name="nome"]').value.trim();
        const email = form.querySelector('input[name="email"]').value.trim();
        const telefone = form.querySelector('input[name="telefone"]').value.trim();
        const mensagem = form.querySelector('textarea[name="mensagem"]').value.trim();

        if (!nome || !email || !telefone || !mensagem) {
            event.preventDefault();
            feedback.textContent = "⚠️ Por favor, preencha todos os campos obrigatórios.";
            feedback.className = "erro";
            feedback.style.display = "block";
        } else {
            feedback.textContent = "✅ Formulário enviado com sucesso!\nObrigado pelo contato.";
            feedback.className = "sucesso";
            feedback.style.display = "block";
        }
    });
});