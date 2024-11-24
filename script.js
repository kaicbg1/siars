document.addEventListener('DOMContentLoaded', function () {
    const resultSection = document.getElementById('result-section');
    const refreshButton = document.getElementById('refresh-button');

    // Função para extrair parâmetros da URL
    function getParameterByName(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    // Função para definir a trilha recomendada com base nos parâmetros da URL
    function setRecommendationFromURL() {
        const percCiencia = getParameterByName('perc_ciencia');
        const percFrontEnd = getParameterByName('perc_front_end');
        const percBackEnd = getParameterByName('perc_back_end');

        if (percCiencia && percFrontEnd && percBackEnd) {
            // Converte os valores para números
            const ciencia = parseFloat(percCiencia);
            const frontEnd = parseFloat(percFrontEnd);
            const backEnd = parseFloat(percBackEnd);

            // Determina a trilha com maior porcentagem
            let recommendedTrack = '';
            if (ciencia >= frontEnd && ciencia >= backEnd) {
                recommendedTrack = 'Ciência de Dados';
            } else if (frontEnd >= ciencia && frontEnd >= backEnd) {
                recommendedTrack = 'Front-End';
            } else {
                recommendedTrack = 'Back-End';
            }

            // Exibe a trilha recomendada
            resultSection.innerHTML = `
                <h2>Sua Trilha Recomendada:</h2>
                <p>${recommendedTrack}</p>
                <p>Ciência de Dados: ${percCiencia}%</p>
                <p>Front-End: ${percFrontEnd}%</p>
                <p>Back-End: ${percBackEnd}%</p>
            `;
        } else {
            resultSection.innerHTML = '<p>Nenhuma trilha recomendada encontrada. Tente refazer o questionário.</p>';
        }
    }

    // Função para refazer o questionário
    refreshButton.addEventListener('click', function () {
        window.location.href = 'https://forms.gle/vVEKRMsFu92az3KW8'; // URL do formulário do Google
    });

    // Chama a função para definir a recomendação ao carregar a página
    setRecommendationFromURL();
});
