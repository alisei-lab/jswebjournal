<script>
  import {
    faGithub,
    faFreeCodeCamp,
    faLinkedin,
    faTwitter,
    faJsSquare,
  } from "@fortawesome/free-brands-svg-icons";
  import { FontAwesomeIcon } from "fontawesome-svelte";

  export let segment;
</script>

<nav>
  <div class="logo">
    <h1><FontAwesomeIcon icon={faJsSquare}/> Webjournal</h1>
    <p>of Ali's journey</p>
  </div>
  <ul>
    <li>
      <a class="nav-item"
        aria-current={segment === undefined ? 'page' : undefined}
        href=".">HOME</a>
    </li>

    <!-- for the JOURNAL link, I'm using rel=prefetch so that Sapper prefetches
      the journal data when the user hover over the link or tap it on a touchscreen -->
    <li>
      <a class="nav-item"
        rel="prefetch"
        aria-current={segment === 'journal' ? 'page' : undefined}
        href="journal">JOURNAL</a>
    </li>

    <li>
      <a class="nav-item"
        aria-current={segment === 'diary' ? 'page' : undefined}
        href="diary">DIARY</a>
    </li>

    <li>
      <a class="nav-item"
        aria-current={segment === 'about' ? 'page' : undefined}
        href="about">ABOUT ME</a>
    </li>
  </ul>
  <div class="socials">
    <a  href="/" class="socials-icon-wrap github">
      <FontAwesomeIcon icon={faGithub} size="2x" />
    </a>
    <a  href="/" class="socials-icon-wrap freecodecamp">
      <FontAwesomeIcon icon={faFreeCodeCamp} size="2x" />
    </a>
    <a  href="/" class="socials-icon-wrap linkedin">
      <FontAwesomeIcon icon={faLinkedin} size="2x" />
    </a>
    <a  href="/" class="socials-icon-wrap twitter">
      <FontAwesomeIcon icon={faTwitter} size="2x" />
    </a>
  </div>
</nav>

<style>
  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 0.5em 1em;
    width: 100%;
    height: 100px;

    font-family: Comfortaa;
    font-weight: 700;
  }

  div.logo {
    padding: 1.5em 1em;
  }

  h1 {
    position: relative;
    font-size: 1.7em;
  }

  p {
    text-align: center;
    margin: 0;
    color: rgb(121, 120, 120);
    font-size: 14px;
  }

  div.socials {
    margin: 0;
    padding: 0;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .socials-icon-wrap {
    margin: 0 15px;
    cursor: pointer;
    transition: all 200ms ease;
  }

  .socials-icon-wrap.github:hover {
    transform: scale(1.3);
  }
  .socials-icon-wrap.freecodecamp:hover {
    transform: scale(1.3);
    color: #00471b;
  }
  .socials-icon-wrap.linkedin:hover {
    transform: scale(1.3);
    color: #0e76a8;
  }
  .socials-icon-wrap.twitter:hover {
    transform: scale(1.3);
    color: #00acee;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  [aria-current].nav-item::after {
    background: crimson;
  }

  a.nav-item {
    position: relative;
    text-decoration: none;
    margin: 1rem;
    display: block;
    font-size: 1.2em;
  }

  a.nav-item::after {
    content: "";
    position: absolute;
    right: 0;
    left: 0;
    bottom: -5px;
    width: 100%;
    height: 4px;
    background: #aaa;
    border-radius: 15px;

    transform-origin: center;
    transform: scaleX(0);
    transition: all 0.3s ease;
  }
  a.nav-item:hover::after,
  [aria-current].nav-item::after {
    transform: scaleX(1);
  }

  @media only screen and (max-width: 1140px) and (min-width: 870px) {

    nav {
      padding: 20px 50px;
      padding-right: 80px;
    }
    
    div.logo {
      margin: 0;
      padding: 0;
    }

    div.socials {
      display: none;
    }
  }

  @media only screen and (max-width: 870px) {
    nav {
      display: none;
    }

    div.logo {
      padding: 0;
    }

    a.nav-item {
      font-size: 0.9em;
      margin: 5px;
    }

    div.socials {
      display: none;
    }
  }
</style>
