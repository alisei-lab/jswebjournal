---
slug: 'Introduzione agli array'
title: 'Introduzione agli array'
date: 'giovedì, 03 Dicembre 2020'
summary: 'Una breve e facile introduzione agli array in JS'
tags: 'javascript'
---

# Introduzione agli array

Un array è una **collezione** di elementi.
Gli array in Javascript non sono un *tipo* di variabile, gli array sono **Objects** (**Oggetti**).

Possono essere inizializzati principalmente in due modi:

```js
let a = [];
let a = Array();
```

Il primo metodo utilizza la *sintassi array literal*. Il secondo utilizza la funzione *built-in* (ovvero incorporata) dell'Oggetto Array.

Possiamo inizializzare l'array con dei valori:

```js
let a = [1, 2, 3];
let a = Array.of(1, 2, 3);
```

Un array può tenere qualsiasi valore, anche di *tipi* differenti, in questo esempio abbiamo un numero, una stringa e un array:

```js
let a = [42, 'Frutta', ['Spaghetti', 'Rigatoni']];
```

Chiaramente potendo fare array di array, possiamo creare array multidimensionali detti anche matrici:

```js
const matrice = [
  [65, 59, 63],
  [45, 21, 74],
  [16, 88, 31],
]
```

Si può leggere il valore di un elemento di un array utilizzando l'indice di posizione che inizia da zero:

```js
a['tavolo', 'sedia', 'armadio'];
a[0] //tavolo
a[1] //sedia
a[2] //armadio
```

Puoi inizializzare un array con valori iniziali arbitrari, ad esempio il seguente codice crea un array di 10 elmenti ed assegna a ciascuno di esso il valore 0:

```js
let a = Array(10).fill(0);
```

