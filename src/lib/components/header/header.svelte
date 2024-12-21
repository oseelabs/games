<script lang="ts">
    import './header.css';
    import { onMount } from 'svelte';
	import MainBanner from './main-banner.svelte';
	import Nav from './nav.svelte';
	import { slide } from 'svelte/transition';

    let mainBanner: HTMLElement;
    let searchIcon: HTMLElement;
    let searchInput: HTMLInputElement;
    let nav: HTMLElement;

    function toggleMenu() {
        nav!.classList.toggle('open');
        mainBanner!.classList.toggle('hide');
    }

    function handleSearchIconClick() {
        searchInput!.classList.toggle('open');
    }

    onMount(() => {
        nav!.classList.remove('open');
        searchIcon!.addEventListener('click', handleSearchIconClick);
    });
</script>

<header>
    <!-- Popup message banners -->
    <div bind:this={mainBanner} class='main-banner'>
        <MainBanner showBanner />
    </div>

    <h1 class="visually-hidden">osee games</h1>

    <div class="header-container">
        <a href="/" class="logo">
            <span>osee games</span>
        </a>

        <div class="between">
            <span 
                bind:this={searchIcon} 
                class="search-icon icon material-symbols-outlined"
                aria-controls="main-search"
                aria-expanded="false"
                aria-label="search icon"
            >search</span>
        
            <button on:click={toggleMenu} aria-label="menu" aria-expanded="false">
                <span class="menu material-symbols-outlined">menu</span>
            </button>
        </div>
    </div>
    
    <input 
        transition:slide
        bind:this={searchInput}
        type="search" 
        name="search" 
        class="main-search" 
        placeholder="Search" 
        aria-label="search" 
    />
</header>

<div bind:this={nav}>
    <Nav open={false} />
</div>
