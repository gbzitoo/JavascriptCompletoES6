const menu = document.querySelector('.menu');

menu.className; //string
menu.classList; // Lista de classes no menu
menu.classList.add('ativo');
menu.classList.add('ativo'); // duas classes
menu.classList.remove('ativo'); 
menu.classList.toggle('ativo'); //adiciona/remove a classe.
menu.classList.contains('ativo'); // true ou false.
menu.classList.replace('ativo','inativo');