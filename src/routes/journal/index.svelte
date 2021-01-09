<script context="module">
  export function preload() {
		return this.fetch(`journal.json`).then(res => res.json()).then(posts => {
			return { posts };
		});
	} 
</script>

<script> 
  export let posts;
</script>

<svelte:head>
  <title>Journal | JS Webjournal</title>
</svelte:head>

<div class="wrapper">
  <h1>Journal - Tutti i posts</h1>

<ul>
  {#each posts as post}
    <li><a rel="prefetch" href="journal/{post.slug}">{post.title}</a></li>
  {/each}
</ul>
</div>

<style>
  .wrapper {
    width: 100%;
    height: 100%;
  }
</style>