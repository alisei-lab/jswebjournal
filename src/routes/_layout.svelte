<script>
  import { fly } from "svelte/transition";

  import Footer from "../components/Footer.svelte";
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<main>
  <div class="nav">
    <Nav {segment} />
  </div>

  {#key segment}
    <section
      class="content"
      in:fly={{ x: 30, duration: 250, delay: 300 }}>
      <slot />
    </section>
  {/key}

  <div class="footer">
    <Footer />
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    min-height: 100vh;

    background-color: white;

    padding: 10px;
    margin: 0;

    flex: 1;
  }

  .nav {
    max-height: 100px;
    width: 100%;
    flex: 0 1 auto;
  }

  .footer {
    max-height: 40px;
    width: 100%;
    margin: 0;
    padding: 0;
    flex: 0 1 40px;
  }

  section {
    max-width: 56em;
    height: 100%;
    padding: 20px;
    margin: auto;
    flex: 1 1 auto;
  }

  :global(html, body) {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }

  :global(body) {
    font-family: -apple-system, BlinkMacSystemFont, Nunito, Ubuntu, Cantarell,
      sans-serif;
    font-size: 16px;
    line-height: 1.5;
    color: #3f4247;
  }

  :global(h1, h2, h3, h4, h5, h6) {
    margin: 0;
    font-weight: 500;
    line-height: 1.2;
  }

  :global(a) {
    color: inherit;
    text-decoration: none;
  }

  :global(*) {
    box-sizing: border-box;
  }
</style>
