<svelte:head>
	<title>About</title>
</svelte:head>

<section class="about">
  <div class="about__text">
    <h1>Contatti</h1>
      <figure>
        <img src="observations.svg" alt="Un uomo seduto su una roccia riflette sui post">
      </figure>
    <p>Mi chiamo Alì, come Alì Babà 👳🏽‍♀️. Amico, marito e poliedrico. Piacere di conoscerti!</p>
    <p>
      Nonostante mi sia laureato in chimica industriale 👨🏽‍🔬, la mia più grande passione è sempre stata l'informatica ⌨️, una passione che coltivo sin da bambino quando copiavo siti e mi definivo webmaster oppure quando scrivevo comandi batch script e credevo di essere un hacker 👨🏽‍💻. 
    </p>
    <p>
      Per quanto apprezzi la chimica 🧪, trovo molta più soddisfazione nel risolvere problemi e creare cose che funzionino e siano utili a me e alle persone con cui lavoro. 
    </p>
    <p>
     Così dopo le mie prime esperienze lavorative ho capito che volevo entrare nel   IT (meglio tardi che mai).
    </p>
  </div>
</section>

<style>
  section.about {
    padding: 10px;
  }

  h1 {
    font-family: Comfortaa, cursive;
    font-weight: bold;
  }

  figure {
    margin: 0;
  }

  img {
    max-width: 280px;
    float: left;
    margin: 20px;
  }

  @media (min-width: 1024px) {
    .about {
      font-size: 1.2em;
    }

    img {
      max-width: 320px;
    }

  }

  @media(max-width: 630px) {
    img {
      width: 100%;
      max-width: 550px;
      margin: 20px auto ;
    }
  }
</style>