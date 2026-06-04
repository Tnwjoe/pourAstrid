const textElement = document.getElementById("typing-text");

if (textElement) {

    const text = `Si tu lis ce message, c'est que tu as parcouru toute cette petite histoire.

Je voulais simplement prendre un moment pour te dire merci.

Merci pour les souvenirs que nous avons créés ensemble, pour les moments de joie, les discussions, les rires et même les petites choses qui rendent les journées plus belles.

En créant ce site, je voulais te montrer quelque chose de différent. Quelque chose qui me ressemble.

Quelques lignes de code, quelques photos, quelques souvenirs... mais surtout beaucoup de sincérité.

Merci d'être toi.

Et merci de faire partie de mon histoire. ❤️`;

    let index = 0;

    function typeWriter() {

        if (index < text.length) {

            textElement.textContent += text.charAt(index);

            index++;

            setTimeout(typeWriter, 40);

        }

    }

    typeWriter();
}