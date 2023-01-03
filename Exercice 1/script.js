
// EXERCICE 1 

/* Recuperons la div */

const elementDiv = document.getElementById("container");

console.log(elementDiv)

/* Changeons le nom "Pete" en "Richard" */

console.log(document.querySelector(".list li:last-child").innerHTML = "Richard");

let uldiv = document.querySelectorAll('ul')
const namenew = 'Marina'
uldiv.forEach(item => {
    item.firstElementChild.textContent = namenew
})

/* Supprimons le <li>qui contient le nœud de texte "Sarah" */

 const listElement = document.querySelectorAll('.list li');
 listElement.forEach(element => {
    if (element.textContent === 'Sarah') {
        element.remove();
    }
  });

// Bonus: utilisation de JavaScript

/* Ajoutons une classe appelée student_listaux deux <ul>'s */

let lists = document.querySelectorAll('.list');
  lists.forEach(list => {
    list.classList.add('student_list'); 
  });
console.log(lists);

/* Ajoutons les classes university et attendance au premier <ul> */

let firstList = document.querySelector('.list');
  firstList.classList.add('university', 'attendance');
console.log(firstList)
