document.addEventListener('DOMContentLoaded', () => {
    const personagemBtn = document.getElementById('personagemBtn');
    const personagemUrl = "/personagens";
    const feiticoBtn = document.getElementById('feiticoBtn');
    const feiticoUrl = "/feiticos";

    personagemBtn.addEventListener('click', () => {
        window.location.href = personagemUrl;
    });

    feiticoBtn.addEventListener('click', () => {
        window.location.href = feiticoUrl;
    });
});

