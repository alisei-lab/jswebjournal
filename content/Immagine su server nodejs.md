---
slug: 'Immagine su server nodejs'
title: 'Full-stack app per caricare file su server con JS'
date: 'Martedì, 01 Dic 2020'
summary: 'Creiamo il nostro cloud personale!'
tags: 'javascript'
---

# Full-stack app per caricare file su server con JS

Caricare un file su server è una funzione molto comune nelle web app, dato che recentemente ho acquistato un RaspberryPi 4 con l'intenzione di creare un mio cloud personale, ho deciso di scrivere a riguardo!

Iniziamo con un elmento HTML di tipo file input:

```html
<input type="file" id="fileUpload" />
```
Ora aggiungiamo un *EventiListener* sull'elemento DOM `#fileUpload` per *ascoltare* quando lo user ha scelto il file da caricare, farà da trigger per la funzione `handleImageUpload()` a cui passeremo il file selezionato per elaborarlo.

```javascript
function handleImageUpload(event) {
  const files = event.target.files;
  const formData = new FormData();
  formData.append('myFile', files[0]);
  fetch('/saveImage', {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    console.log(data.path)
  })
  .catch(error => {
    console.error(error)
  })
}
  document.querySelector('#fileUpload').addEventListener('change', event => {
    handleImageUpload(event)
  })
}
```

Usiamo l'API Fetch per inviare il file al server. Quando il server riceve il file con successo (la promessa è risolta), ci risponderà mandandoci il percorso nella proprietà `path` della risposta (che sarebbe `data`).

Questo è un setup minimo, ma sufficiente per dimostrare quanto ci serve.

## Gestione del file caricato nel server-side utilizzando NodeJS

Ecco qui i dettagli da utilizzare su lato server, in particolare quello che vogliamo avere è creare un'applicazione che sti ad ascoltare le richeiste ricevute su una porta del server.

Utilizziamo `Express` che è un Web Framework per NodeJS, ossia una "libreria" con regole e limiti ben precisi che ci facilita l'utilizzo di Node come server web.

In questo semplice esempio installiamo solo il modulo che ci interessa, ossia `express-fileupload` (il nome parla da se):

```javascript
npm install express-fileupload
```

Importiamo il nuovo arrivato:

```javascript
import fileupload from 'express-fileupload'
```

Dopodiché creiamo la nostra app Express:

```javascript
app.use(
  fileupload(),
```

Ora i file ricevuti sono nell'oggetto `req.files`, quindi vediamo di dirlo alla nostra app.

```javascript
app.post('/saveImage', (req, res) => {
  const fileName = req.files.myFile.name 
  const path = __dirname + '/images/' + fileName
  image.mv(path, (error) => {
    if (error) {
      console.error(error)
      res.writeHead(500, {
        'Content-Type': 'application/json'
      })
      res.end(JSON.stringify({ status: 'error', message: error }))
      return
    }
    res.writeHead(200, {
      'Content-Type': 'application/json'
    })
    res.end(JSON.stringify({ status: 'success', path: '/img/houses/' + fileName }))
  })
})
```

Come lo era per il client, questo è un setup veramente minimal.

Abbiamo usato la proprietà `mv` (**m**o**v**e) per "muovere", ossia salvare il file, che `express-fileupload` ci fornisce. La stiamo salvando in `path` e poi comunichiamo al cliente dell'avvenuto successo! (O un errore eventualmente :/).

## Controlliamo le proprietà del file in client-side

Come da titolo vogliamo caricare solo immagini, fino ad ora non abbiamo mai imposto questa regola, quindi vediamo di mettere qualche controllo nel lato client.

Modifichiamo la funzione `handleImageUpload` per controllare il tipo di file e le dimensioni:

```javascript
function handleImageUpload(event) {
  const files = event.target.files
  const myImage = files[0]
  const imageType = /image.*/
  if (!myImage.type.match(imageType)) {
    alert('Attenzione, ma solo le immagine sono consentite')
    return
  }
  if (myImage.size > (10000*1024)) {
    alert('Attenzione, la dimensione massima consentita è 10MB')
    return
  }
}
```

E questo è tutto, abbiamo creato un minimal setup per un'app fullstack per caricare files su server.