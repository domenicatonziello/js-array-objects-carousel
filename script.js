/*
Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile assieme al suo titolo e testo.
Milestone 2:
Aggiungere il "ciclo infinito" del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
BONUS 1:
Aggiungere le thumbnails (sotto forma di miniatura) ed al click attivare l’immagine corrispondente.
BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
BONUS 3:
Aggiungere bottoni di start/stop  del meccanismo di autoplay.
*/
const data = [
  {
    image: 'img/01.webp',
    title: 'Marvel\'s Spiderman Miles Morale',
    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
  }, {
    image: 'img/02.webp',
    title: 'Ratchet & Clank: Rift Apart',
    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
  }, {
    image: 'img/03.webp',
    title: 'Fortnite',
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  }, {
    image: 'img/04.webp',
    title: 'Stray',
    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
  }, {
    image: 'img/05.webp',
    title: "Marvel's Avengers",
    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
  }
];
//*  PRENDO ELEMENTI DAL DOM----------------------------------------------------

const carousel = document.getElementById('carousel');
const up = document.getElementById('up');
const down = document.getElementById('down');


// genero card
let cardElement = '';
for( let i = 0; i < data.length ; i++){
  const cover = data[i];
  cardElement += 
  `<div class="card">
     <img src="${cover.image}" alt="${cover.title}">
     <div class="text">
        <h1> ${cover.title} </h1>
        <p>${cover.text}</p>
     </div>
   </div>
  ` 
};
carousel.innerHTML = cardElement;


// recupero card
const card = document.querySelectorAll('.card');
// metto la prima card active
let currentActiveIndex = 0;
card[currentActiveIndex].classList.add('active');




//*aggiungo event listener alle frecce ---------------------------------------------
down.addEventListener('click', () => {
  // rimuovo classe active 
  card[currentActiveIndex].classList.remove('active');

  // incremento l'indice
  currentActiveIndex++;
  // riporto l'indice a zero quando finiscono le img
  if(currentActiveIndex === card.length) currentActiveIndex = 0;

  // aggiungo classe active
  card[currentActiveIndex].classList.add('active');

});

up.addEventListener('click', () => {
  // rimuovo classe active 
  card[currentActiveIndex].classList.remove('active');

  // incremento l'indice
  currentActiveIndex--;
  // riporto l'indice a zero quando finiscono le img
  if(currentActiveIndex < 0) currentActiveIndex = card.length -1;

  // aggiungo classe active
  card[currentActiveIndex].classList.add('active');

});

