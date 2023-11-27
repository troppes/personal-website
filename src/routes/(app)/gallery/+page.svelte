<script>
	import LightGallery from 'lightgallery';
	import lgThumbnail from 'lightgallery/plugins/thumbnail';
	import lgZoom from 'lightgallery/plugins/zoom';
	import lgFullScreen from 'lightgallery/plugins/fullscreen';
	import lgShare from 'lightgallery/plugins/share';
	import { onMount } from 'svelte';

	import GalleryHeader from '$lib/components/Gallery/GalleryHeader.svelte';

	export let data;

	let lightGallery = null;
	let allTags = data.tags || [];
	let allPhotos = [...data.galleryPhotos] || [];
	let galleryHeader = data.galleryHeader || null;
	let licenseKey = data.licenseKey || null;
	let offset = 10;

	let tags = [...allTags].slice(0, 6);
	let photos = [...allPhotos.splice(0, offset)];
	let allTagsButton = 'More tags';

	onMount(() => {
		if (lightGallery) {
			LightGallery(lightGallery, {
				plugins: [lgThumbnail, lgZoom, lgFullScreen, lgShare],
				speed: 500,
				licenseKey: licenseKey
			});
		}
		window.onscroll = async () => {
			const bottomOfWindow = window.innerHeight + window.scrollY >= document.body.offsetHeight;
			if (bottomOfWindow) {
				photos.push(...allPhotos.splice(0, offset));
				photos = photos;
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

<GalleryHeader pictureUrl={galleryHeader} />

<div class="masonry-wrapper">
	<div class="pure-g">
		{#each tags as tag}
			<div class="pure-u-1-2 pure-u-lg-1-4 pure-u-xl-1-8">
				<button class="tag" on:click={tagClicked(tag)}>{tag.tag}</button>
			</div>
		{/each}

		<div class="pure-u-1-2 pure-u-lg-1-4 pure-u-xl-1-8">
			<button class="show-all" on:click={moreTagsClicked}>{allTagsButton}</button>
		</div>
		<div class="pure-u-1-2 pure-u-lg-1-4 pure-u-xl-1-8">
			<button class="reset" on:click={resetTags}>Reset</button>
		</div>
	</div>
	<div bind:this={lightGallery} class="masonry">
		{#each photos as photo}
			<a
				href={photo.photoUrl}
				data-src={photo.photoUrl}
				data-sub-html={photo.description}
				data-pinterest-text="Check out this Photo I found on https://reitz.dev/gallery"
				data-tweet-text="Check out this Photo I found on https://reitz.dev/gallery"
				data-slide-name={photo.id}
				data-facebook-share-url={photo.photoUrl}
				data-twitter-share-url={photo.photoUrl}
				data-pinterest-share-url={photo.photoUrl}
				class="masonry-item"
			>
				<img
					alt={photo.alt}
					class="masonry-content pure-img"
					src="{photo.photoUrl}?fit=cover&width=400&quality=80"
				/>
			</a>
		{/each}
	</div>
</div>

<style>
	.masonry-wrapper {
		padding-top: 10vh;
		margin: auto;
		width: 60%;
	}

	.masonry {
		columns: 1;
	}

	.masonry-item {
		display: inline-block;
		margin-top: 1.5vh;
		transition: transform 0.5s ease-in-out;
	}

	.masonry-item:hover {
		transform: scale(1.05);
		cursor: pointer;
	}

	@media only screen and (max-width: 1023px) and (min-width: 768px) {
		.masonry {
			columns: 2;
		}
		.masonry-wrapper {
			width: 80%;
		}
	}

	@media only screen and (min-width: 1024px) {
		.masonry {
			columns: 3;
		}
	}

	.masonry-item,
	.masonry-content {
		border-radius: 4px;
		overflow: hidden;
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
</style>
