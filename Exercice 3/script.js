
let div = document.querySelector('#navBar');

/* modifions l'attribut id de la div */
div.setAttribute('id', 'socialNetworkNavigation');

/* créons un nouvel élément li */
let newLi = document.createElement('li');

/* créons un nouveau nœud de texte avec "Déconnexion" comme texte spécifié */
const newTextNode = document.createTextNode('Déconnexion');

/* ajoutons le nœud de texte au nœud de liste nouvellement créé */
newLi.appendChild(newTextNode);

/* ajoutons ce nœud de liste mis à jour à la liste non ordonnée */
let ul = document.querySelector('ul');
ul.appendChild(newLi);

/* prime : affichons le texte des premier et dernier éléments li de la liste */
let firstLi = ul.firstElementChild;
let lastLi = ul.lastElementChild;
console.log(firstLi.textContent); // affiche "Profile"
console.log(lastLi.textContent); // affiche "Déconnexion"