<script lang="ts">
	import saveBlob from '$lib/vercel/blob';
	import { getTodos } from '$lib/vercel/supabase';
    import data from './data.json';

    const hero = data.hero;
    const url = saveBlob('test', 'hero.png', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAIAAAD/gAIDAAAA5klEQVR4nO3QQQkAIADAQLV/Z63gXiLcJRibe3BrvQ74iVmBWYFZgVmBWYFZgVmBWYFZgVmBWYFZgVmBWYFZgVmBWYFZgVmBWYFZgVmBWYFZgVmBWYFZgVmBWYFZgVmBWYFZgVmBWYFZgVmBWYFZgVmBWYFZgVmBWYFZgVmBWYFZgVmBWYFZgVmBWYFZgVmBWYFZgVmBWYFZgVmBWYFZgVmBWYFZgVmBWYFZgVmBWYFZgVmBWYFZgVmBWYFZgVmBWYFZgVmBWYFZgVmBWYFZgVmBWYFZgVmBWYFZgVmBWYFZgVmBWcEBil4Bx/GEGnoAAAAASUVORK5CYII=');
    const todos = getTodos();

    console.log(url, todos);
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