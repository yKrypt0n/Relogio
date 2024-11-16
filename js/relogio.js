    function atualizarRelogio() {
        const agora = new Date();
        const horas = String(agora.getHours()).padStart(2, '0');
        const minutos = String(agora.getMinutes()).padStart(2, '0');
        const segundos = String(agora.getSeconds()).padStart(2, '0');

        // Define o texto do relógio no formato HH:MM:SS
        document.getElementById('relogio').textContent = `${horas}:${minutos}:${segundos}`;
    }

    // Atualiza o relógio a cada segundo
    setInterval(atualizarRelogio, 1000);

    // Chama a função imediatamente para exibir o horário inicial
    atualizarRelogio();