import { env } from '$env/dynamic/private';
import { getPhotos, getTags } from '$lib/backend-requests.js';

export async function load() {
    let photos = null;
    let tags = null;

    try {
        const photosResponse = await getPhotos();
        photos = photosResponse.data.map((/** @type {{ id: { toString: () => any; }; description: any; tags: { gallery_tags_id: any; }[]; alt: any; photo: string; }} */ post) => ({
            id: post.id.toString(),
            description: post.description,
            tags: post.tags.map((/** @type {{ gallery_tags_id: any; }} */ e) => e.gallery_tags_id),
            alt: post.alt,
            photoUrl: getImageUrl(post.photo)
        }));
    } catch (error) {
        console.error('Failed fetching photos:', error);
    }

    try {
        const tagsResponse = await getTags();
        tags = tagsResponse.data.map((/** @type {{ id: { toString: () => any; }; tag: any; gallery: {}; }} */ tag) => ({
            id: tag.id.toString(),
            tag: tag.tag,
            timesUsed: Object.keys(tag.gallery).length
        })).sort((/** @type {{ timesUsed: number; }} */ a, /** @type {{ timesUsed: number; }} */ b) => b.timesUsed - a.timesUsed);
    } catch (error) {
        console.error('Failed fetching tags:', error);
    }

    return {
        galleryPhotos: photos,
        tags,
        licenseKey: env.LIGHTGALLERY_KEY,
        url: env.URL
    };
}

/**
 * @param {string} imageKey
 */
function getImageUrl(imageKey) {
    return env.EXTERNAL_ASSETS_URL + imageKey;
}
