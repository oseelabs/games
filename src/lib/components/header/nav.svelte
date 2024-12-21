<script lang="ts">
	import { slide } from "svelte/transition";

    interface Props {
        open: boolean;
    };

    let { open }: Props = $props();
</script>

{#if open}
    <nav transition:slide={{ duration: 300, delay: 0, axis: "x" }}>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </nav>
{/if}

<style>
    nav {
        z-index: 100;
        display: flex;
        background: teal;
        position: absolute;
        width: min(100%, 28rem);
        inset: 0 0 0 auto;
    }

    ul {
        list-style: none;
    }

    li {
        display: flex;
        margin-right: 1rem;
    }
</style>