<script>
	import { Store } from '$lib/store.svelte';

	const state = new Store();

	state.increment();
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<p>State {state.value}</p>
