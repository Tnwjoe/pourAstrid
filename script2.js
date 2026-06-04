// ====================
// Bouton Entrer
// ====================

const enterBtn = document.getElementById("enterBtn");

if (enterBtn) {
    enterBtn.addEventListener("click", () => {
        window.location.href = "Souvenirs.html";
    });
}


// ====================
// Barre de progression
// ====================

const progressBar = document.querySelector(".progress-bar");

if (progressBar) {

    window.addEventListener("scroll", () => {

        const scrollTop = document.documentElement.scrollTop;

        const scrollHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const progress = (scrollTop / scrollHeight) * 100;

        progressBar.style.width = progress + "%";
    });

}


// ====================
// Musique
// ====================

const musicBtn = document.getElementById("musicBtn");
const music = document.getElementById("music");

if (musicBtn && music) {

    musicBtn.addEventListener("click", () => {
        music.play();
    });

}


// ====================
// Bouton Lettre
// ====================

const letterBtn = document.getElementById("letterBtn");

if (letterBtn) {

    letterBtn.addEventListener("click", () => {
        window.location.href = "lettre.html";
    });

}


// ====================
// Effet machine à écrire
// ====================

const textElement = document.getElementById("typing-text");

if (textElement) {

    const text = `Si tu lis ce message, c'est que tu as parcouru toute cette petite histoire.

Je voulais simplement prendre un moment pour te dire merci.

Merci pour les souvenirs que nous avons créés ensemble, pour les moments de joie, les discussions, les rires et même les petites choses qui rendent les journées plus belles.

En créant ce site, je voulais te montrer quelque chose de différent. Quelque chose qui me ressemble.

Quelques lignes de code, quelques photos, quelques souvenirs... mais surtout beaucoup de sincérité.

Chaque photo ici représente un moment précieux pour moi.

Je ne sais pas ce que l'avenir nous réserve, mais je sais que les moments passés avec toi ont une place particulière dans mon cœur.

Merci d'être toi.

Et merci de faire partie de mon histoire. ❤️`;

    let index = 0;

    function typeWriter() {

        if (index < text.length) {

            textElement.textContent += text.charAt(index);

            index++;

            setTimeout(typeWriter, 35);

        }

    }

    typeWriter();
}