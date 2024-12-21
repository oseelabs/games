<script lang="ts">
    import '$lib/style/home.css';
	import { HeroBanner } from "$lib/components/home";
	import type { PageData } from './$types';

    let { data }: { data: PageData } = $props();

</script>

<main>
    <HeroBanner />

    <!-- TEST -->
     <h1>{data.todos}</h1>
</main>
