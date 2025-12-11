
const boutons = document.querySelectorAll('.reponse');

boutons.forEach(bouton => {
    bouton.addEventListener('click', () => {
        if (bouton.dataset.correct === "true") {
            bouton.classList.add("true");
    
        } else {
            bouton.classList.add("false");
        }
        boutons.forEach(b => b.disabled = false);
    });
});