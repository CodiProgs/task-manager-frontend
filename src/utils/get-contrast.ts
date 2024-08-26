/**
 * Calculates the contrast color (either black or white) that best complements the given RGB color.
 *
 * This function determines the luminance of the provided RGB color and returns 'black' if the luminance
 * is greater than 0.5, indicating a lighter color, and 'white' if the luminance is less than or equal to 0.5,
 * indicating a darker color. This can be useful for determining readable text colors against various backgrounds.
 *
 * @param {string} rgbColor - The RGB color represented as a string of three comma-separated numbers (e.g., "255,255,255").
 * @returns {string} Returns 'black' if the luminance is greater than 0.5, otherwise returns 'white'.
 */
export function getContrastColor(rgbColor: string): string {
	const [r, g, b] = rgbColor.split(',').map(Number)

	const normalizedR = r / 255
	const normalizedG = g / 255
	const normalizedB = b / 255

	const luminance =
		0.2126 * normalizedR + 0.7152 * normalizedG + 0.0722 * normalizedB

	return luminance > 0.5 ? 'black' : 'white'
}
