<script lang="ts">
	import saveBlob from '$lib/vercel/blob';
    import data from './data.json';

    const hero = data.hero;
</script>

<section class="hero-banner">
    <div class="hero-banner__content">
        <p class="hero-banner__title">
            {hero.heading.start}
            <span class="hero-banner__title--highlight">
                {hero.heading.highlight}
            </span> 
            {hero.heading.end}
        </p>
        <p class="hero-banner__description">
            {@html hero.description}
        </p>
    </div>
</section>