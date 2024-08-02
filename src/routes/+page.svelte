<script>
	import { Store } from '$lib/store.svelte';

	const state = new Store();

	state.increment();
</script>

<h1>Welcome to SvelteKit</h1>
<h2>Svelte v: 5.0.0-next.206</h2>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<p>State {state.value}</p>
