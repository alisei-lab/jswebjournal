<script>
  import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "fontawesome-svelte";
</script>

<svelte:head>
  <title>Home | JS Webjournal</title>
</svelte:head>

<div class="container">
  <h1>Hey! Io sono Alì 👋</h1>

  <br />

  <p>
    Benvenuto nel mio
    <i>Web Journal</i>
    qui raccolgo tutto ciò che imparo sull'universo di Javascript.
  </p>
  <p>
    Aiutare e condividere con gli altri è sempre stato il modo migliore per me
    di imparare, sentiti libero di condividere quello che ti piace!
  </p>

  <figure><img src="front_image.svg" alt="A guy in front of the pc" /></figure>
</div>

<style>
  .container {
    height: 100%;
    width: 100%;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

    align-items: center;
  }

  h1,
  p {
    text-align: center;
    margin: 0 auto;
  }

  p {
    font-size: 18px;
  }

  h1 {
    font-size: 2.8em;
    font-weight: 700;
    margin: 0;
  }

  span {
    padding: 15px;
    text-transform: uppercase;
    text-align: center;
  }

  img {
    max-width: 300px;
    height: auto;
  }

  @media (max-width: 750px) {
    span {
      font-size: 14px;
    }
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>
