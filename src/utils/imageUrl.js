const IMAGE_BASE_URL = 'https://uvstoredb1.onrender.com'

/**
 * Converts a relative /uploads/ image path to an absolute URL pointing to the Render backend.
 * In production (Vercel), relative paths would resolve to the Vercel domain which doesn't host images.
 * In dev mode, the Vite proxy forwards /uploads to the backend, but using the full URL works in both environments.
 *
 * @param {string} path - The image path (e.g., '/uploads/p_img1.png')
 * @returns {string} The full image URL
 */
export const getImageUrl = (path) => {
    if (!path) return ''
    if (path.startsWith('http')) return path
    if (path.startsWith('/uploads/')) {
        return `${IMAGE_BASE_URL}${path}`
    }
    return path
}