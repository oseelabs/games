<script lang="ts">
	import { fade, slide } from "svelte/transition";

    interface Props {
        showBanner?: boolean;
        bannerText?: string;
    };

    let { showBanner=true, bannerText = "🎉 Welcome to osee games! 🎉" }: Props = $props();
</script>

{#if showBanner}
    <div class="banner-content" transition:slide>
        <p>{bannerText}</p>
        <button 
            onclick={() => {}} 
            aria-label="close banner"
        >
            <span class="material-symbols-outlined">close</span>
        </button>
    </div>
{/if}

<style>
    .banner-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 0;
        margin-inline-end: -.5rem;
        background-color: var(--color-primary);
        color: var(--color-white);
        width: 100%;
        max-width: 780px;
    }

    .banner-content p {
        margin: 0;
    }

    .banner-content button {
        background-color: transparent;
        border: none;
        color: var(--color-white);
        cursor: pointer;
    }
</style>