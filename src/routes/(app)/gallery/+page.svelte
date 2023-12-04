<script>
	import LightGallery from 'lightgallery';
	import lgThumbnail from 'lightgallery/plugins/thumbnail';
	import lgZoom from 'lightgallery/plugins/zoom';
	import lgFullScreen from 'lightgallery/plugins/fullscreen';
	import lgShare from 'lightgallery/plugins/share';
	import { onMount } from 'svelte';

	import 'lightgallery/css/lightgallery-bundle.min.css';

	export let data;

	let lightGallery = null;
	let lgJS = null;
	let allTags = data.tags || [];
	let allPhotos = [...data.galleryPhotos] || [];
	let licenseKey = data.licenseKey || null;
	let offset = 20;

	let tags = [...allTags].slice(0, 6);
	let photos = [...allPhotos.splice(0, offset)];
	let allTagsButton = 'More tags';

	function getPicSize() {
		const randomNumber = Math.random();
		if (randomNumber < 0.5) {
			return '';
		} else if (randomNumber < 0.7) {
			return 'tall';
		} else if (randomNumber < 0.9) {
			return 'wide';
		} else {
			return 'big';
		}
	}

	onMount(() => {
		lgJS = LightGallery(lightGallery, {
			plugins: [lgThumbnail, lgZoom, lgFullScreen, lgShare],
			speed: 500,
			licenseKey: licenseKey
		});

		lightGallery.addEventListener('lgBeforeOpen', () => {
			lgJS.refresh();
		});

		window.onscroll = async () => {
			const bottomOfWindow = window.innerHeight + window.scrollY >= document.body.offsetHeight - 30;
			if (bottomOfWindow) {
				photos.push(...allPhotos.splice(0, offset));
				photos = photos; // needed for refresh
				lgJS.refresh();
			}
		};
	});

	function tagClicked(tag) {
		allPhotos = [];
		photos = [...data.galleryPhotos].filter((e) => e.tags.includes(Number(tag.id)));
	}

	function resetTags() {
		allPhotos = [...data.galleryPhotos];
		photos = [...allPhotos.splice(0, offset)];
	}

	function moreTagsClicked() {
		if (tags.length === allTags.length) {
			tags = tags.slice(0, 6);
			allTagsButton = 'More tags';
		} else {
			tags = allTags;
			allTagsButton = 'Less tags';
		}
	}
</script>

<div class="flex-container">
	{#each tags as tag}
		<div class="tag-box">
			<button class="tag" on:click={tagClicked(tag)}>{tag.tag}</button>
		</div>
	{/each}

	<div class="tag-box">
		<button class="show-all tag" on:click={moreTagsClicked}>{allTagsButton}</button>
	</div>
	<div class="tag-box">
		<button class="reset tag" on:click={resetTags}>Reset</button>
	</div>
</div>
<div bind:this={lightGallery} class="masonry">
	{#each photos as photo}
		<a
			href={photo.photoUrl}
			data-src={photo.photoUrl}
			data-sub-html={photo.description}
			data-pinterest-text="Check out this Photo I found on {data.url}/gallery"
			data-tweet-text="Check out this Photo I found on {data.url}/gallery"
			data-slide-name={photo.id}
			data-facebook-share-url={photo.photoUrl}
			data-twitter-share-url={photo.photoUrl}
			data-pinterest-share-url={photo.photoUrl}
			class={'masonry-item ' + getPicSize()}
		>
			<img alt={photo.alt} src="{photo.photoUrl}?fit=cover&width=400&quality=80" />
		</a>
	{/each}
</div>

<style>
	.flex-container {
		padding-top: 10vh;
		margin: auto;
		width: 60%;
	}

	.masonry {
		display: grid;
		grid-gap: 10px;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		grid-auto-rows: 200px;
		grid-auto-flow: dense;
	}

	.masonry .wide {
		grid-column: span 2;
	}
	.masonry .tall {
		grid-row: span 2;
	}
	.masonry .big {
		grid-column: span 2;
		grid-row: span 2;
	}

	.masonry-item {
		display: flex;
		justify-content: center;
		align-items: center;
		transition: transform 0.5s ease-in-out;
	}

	.masonry-item > img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 5px;
	}

	.masonry-item:hover {
		transform: scale(1.05);
		cursor: pointer;
	}

	.show-all {
		all: unset;
		text-overflow: ellipsis;
		white-space: nowrap;
		cursor: pointer;
		background: var(--secondary-color);
		border-radius: 3px;
		color: var(--primary-text-color);
		display: inline-block;
		height: 1.625rem;
		line-height: 1.625rem;
		padding: 0 1.25rem 0 1.438rem;
		position: relative;
		margin: 0 0.625rem 0.625rem 0;
		text-decoration: none;
		transition: color 0.2s;
	}

	.tag {
		all: unset;
		text-overflow: ellipsis;
		white-space: nowrap;
		cursor: pointer;
		background: var(--secondary-color);
		border-radius: 3px 0 0 3px;
		color: var(--primary-text-color);
		display: inline-block;
		height: 1.625rem;
		line-height: 1.625rem;
		padding: 0 1.25rem 0 1.438rem;
		position: relative;
		margin: 0 0.625rem 0.625rem 0;
		text-decoration: none;
		transition: color 0.2s;
	}

	.reset {
		all: unset;
		text-overflow: ellipsis;
		white-space: nowrap;
		cursor: pointer;
		background: var(--secondary-color);
		border-radius: 3px;
		color: var(--headline-text-color);
		display: inline-block;
		height: 1.625rem;
		line-height: 1.625rem;
		padding: 0 1.25rem 0 1.438rem;
		position: relative;
		margin: 0 0.625rem 0.625rem 0;
		text-decoration: none;
		transition: color 0.2s;
	}

	.tag::before {
		background: var(--primary-color);
		border-radius: 0.625rem;
		content: '';
		height: 0.375rem;
		left: 0.625rem;
		position: absolute;
		width: 0.375rem;
		top: 0.625rem;
	}

	.tag::after {
		background: var(--primary-color);
		border-bottom: 0.813rem solid transparent;
		border-left: 0.625rem solid var(--secondary-color);
		border-top: 0.813rem solid transparent;
		content: '';
		position: absolute;
		right: 0;
		top: 0;
	}

	.tag:hover,
	.reset:hover,
	.show-all:hover {
		background-color: var(--fourth-color);
		color: var(--headline-text-color);
	}

	.tag:hover::after {
		border-left-color: var(--fourth-color);
	}

	.tag-box {
		flex-grow: 0;
		flex-shrink: 0;
		flex-basis: 100%;
	}

	@media only screen and (min-width: 769px) {
		.tag-box {
			flex-basis: 50%;
		}
	}

	@media only screen and (min-width: 1024px) {
		.tag-box {
			flex-basis: 25%;
		}
	}
</style>
