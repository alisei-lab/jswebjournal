<script>
  import { faHeart } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "fontawesome-svelte";
</script>

<footer>
  <div>
    &copy; {new Date().getFullYear()} JS Webjournal - Sharing my journey with you guys
    <FontAwesomeIcon icon={faHeart} size="xs"/>
  </div>
</footer>

<style>
  footer {
    display: block;
    width: 90%;
    height: 40px;
    padding: 10px 0;
    margin: 0 auto;

    border-top: 2px solid #3332;
    color: #bbb;

    text-align: center;
    font-size: 14px;
  }

  @media only screen and (max-width: 520px) {
    footer {
      font-size: 12px;
      height: 50px;
    }
  }
</style>
