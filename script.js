// Attendre que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', function() {

    // Fonction pour afficher un message d'accueil
    function showWelcomeMessage() {
        alert('Bienvenue sur le site des Cours SIO !');
    }

    // Ajouter un événement de clic au chargement de la page
    window.addEventListener('load', showWelcomeMessage);

    // Fonction pour afficher la date et l'heure dans le pied de page
    function updateFooterDate() {
        const footer = document.querySelector('footer');
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString('fr-FR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        footer.innerHTML += `<p>Date actuelle : ${formattedDate}</p>`;
    }

    // Mettre à jour la date dans le pied de page
    updateFooterDate();

});
