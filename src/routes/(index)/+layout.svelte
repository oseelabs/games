<script>
	import '$lib/style/main.css';
	import { MainHeader } from '$lib/components';

	let { children } = $props();
</script>

<MainHeader />

{@render children()}