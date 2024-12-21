<script lang="ts">
    import '$lib/style/home.css';
	import { HeroBanner } from "$lib/components/home";
	import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();

</script>

<main>
    <HeroBanner />
</main>
