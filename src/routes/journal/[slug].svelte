<script context="module">
  export async function preload({ params }) {
    // the `slug` parameter is available because
    // this file is called [slug].html
    const res = await this.fetch(`journal/${params.slug}.json`);
    const data = await res.json();
    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import { fade } from "svelte/transition";

  import hljs from "highlight.js/lib/core";
  import javascript from "highlight.js/lib/languages/javascript";
  import marked from "marked";

  hljs.registerLanguage("javascript", javascript);

  export let post;

  marked.setOptions({
    highlight: function (code, lang) {
      return hljs.highlight(lang, code).value;
    },
  });
</script>

<svelte:head>
  <title>{post.slug}</title>
</svelte:head>

<div class="post" in:fade>
  {@html marked(post.htmlContent)}
</div>

<style>
  /*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
  .post {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    overflow-wrap: break-word;
    min-width: 0;
  }

  .post :global(h2, h1) {
    font-weight: 700;
  }

  .post :global(p) {
    margin: 0;
    padding: 16px;
  }

  .post :global(pre) {
    background-color: #333;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
    padding: 0.5em;
    border-radius: 6px;
    margin: 0;
  }
  .post :global(pre) :global(code) {
    font-size: 14px;
    background-color: transparent;
    padding: 0.5em;
    color: #ddd;
  }
  .post :global(code) {
    overflow-x: scroll;
  }
  .post :global(ul) {
    line-height: 1.5;
  }
  .post :global(li) {
    padding: 0 0 0.5em 0;
  }

  @media (max-width: 630px) {
    .post :global(pre) :global(code) {
      font-size: 14px;
    }

    .post :global(p) {
      font-size: 14px;
    }

    .post :global(*) {
      margin: 0 !important; 
      padding: 0;
    }
  }
</style>
