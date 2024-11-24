document.addEventListener('DOMContentLoaded', function () {
    const resultSection = document.getElementById('result-section');
    const refreshButton = document.getElementById('refresh-button');

    // Função para buscar o resultado do back-end
    function fetchRecommendation() {
        fetch('http://localhost:5000/get-recommendation') // URL do back-end para obter a trilha recomendada
            .then(response => response.json())
            .then(data => {
                // Substitui o conteúdo da seção com a trilha recomendada
                resultSection.innerHTML = `
                    <h2>Sua Trilha Recomendada:</h2>
                    <p>${data.recommendedTrack}</p>
                `;
            })
            .catch(error => {
                console.error('Erro ao buscar a trilha recomendada:', error);
                resultSection.innerHTML = '<p>Erro ao carregar a trilha recomendada. Tente novamente mais tarde.</p>';
            });
    }

    // Função para refazer o questionário
    refreshButton.addEventListener('click', function () {
        window.location.href = 'https://forms.gle/vVEKRMsFu92az3KW8'; // URL do formulário do Google
    });

    // Chama a função para buscar o resultado ao carregar a página
    fetchRecommendation();
});
