/*
Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/
var app = new Vue({
    el: '#root',
    data: {
        messaggio: 'Hello Vue',
        image: 'https://picsum.photos/200',
    },
})