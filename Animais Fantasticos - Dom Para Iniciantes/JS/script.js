const menu = document.querySelector('.menu');

// menu.className; //string
// menu.classList; // Lista de classes no menu
// menu.classList.add('ativo');
// menu.classList.add('ativo','Retalho'); // duas classes
// menu.classList.remove('ativo'); 
// menu.classList.toggle('ativo'); //adiciona/remove a classe.
// menu.classList.contains('ativo'); // true ou false.
// menu.classList.replace('ativo','inativo');
// menu.className  += ' TESTEKK'
// console.log(menu.classList)

const animais = document.querySelector('.animais');

// console.log(animais.attributes[0]) // class
// console.log(animais.attributes.class) // class
// console.log(animais.attributes[1]) // id
// console.log(animais.attributes.id) // id
// console.log(animais.attributes[3]) // Data-Texto
// console.log(animais.attributes['data-texto']) //  Data-Texto


const img = document.querySelector('img');

// console.log(img.getAttribute('src')); // valor do src
// console.log(img.getAttribute('alt')); // valor do alt antes de mudar
// console.log(img.setAttribute('alt','Texto Alternativo')); // muda o alt
// console.log(img.getAttribute('alt')); // valor do alt dps de mudar
// console.log(img.hasAttribute('id')); // true/false
// img.removeAttribute('alt') // remove o alt
// img.hasAttributes(); // true/false se tiver algum atributo


const animaisDois = document.querySelector('.animais');

console.log(animaisDois.className) // string com os nomes das classes.
console.log(animaisDois.className = 'Animal') // substitui completamente a string
console.log(animaisDois.className += ' Animal') // Adiciona o valor as classes já existentes.
console.log(animaisDois.attributes = 'class="Ativo"') // Não funciona, O Attributes é uma propriedade Read-Only

