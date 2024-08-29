// Define a data e hora de término para o contador
const dataEvento = new Date('2024-12-02T00:00:00');

function updateCountdown() {
    const now = new Date();
    const tempoRealizacao = dataEvento - now;

    if (tempoRealizacao <= 0) {
        document.getElementById('days').innerText = '00';
        document.getElementById('hours').innerText = '00';
        document.getElementById('minutes').innerText = '00';
        document.getElementById('seconds').innerText = '00';
        return; // Se o tempo acabou, não atualiza mais
    }

    // Calcula o tempo restante
    const days = Math.floor(tempoRealizacao / (1000 * 60 * 60 * 24));
    const hours = Math.floor((tempoRealizacao % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((tempoRealizacao % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((tempoRealizacao % (1000 * 60)) / 1000);

    // Atualiza o DOM
    document.getElementById('days').innerText = String(days).padStart(2, '0');
    document.getElementById('hours').innerText = String(hours).padStart(2, '0');
    document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
    document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');
}

// Atualiza o contador a cada segundo
setInterval(updateCountdown, 1000);

// Atualiza imediatamente ao carregar a página
updateCountdown();
