
/* ajoutons une couleur d'arrière-plan "bleu clair" et un peu de rembourrage à la div */

let div = document.querySelector('div');
div.style.backgroundColor = 'lightblue';
div.style.padding = '10px';

/* cachons le premier élément li */
let firstLi = document.querySelector('li');
firstLi.style.display = 'none';

/* ajoutons une bordure au second élément li */
let secondLi = document.querySelectorAll('li')[1];
secondLi.style.border = '1px solid black';

/* modifions la taille de la police de tout le corps */
document.body.style.fontSize = '20px';

/*  affichons une alerte si la couleur de fond de la div est "bleu clair" */
if (div.style.backgroundColor === 'lightblue') {
    alert(`Bonjour ${firstLi.textContent} et ${secondLi.textContent}`);
}
