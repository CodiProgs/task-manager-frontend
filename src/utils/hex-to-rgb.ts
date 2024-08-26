/**
 * Converts a hexadecimal color value to its RGB representation.
 *
 * This function supports short (e.g., "#FFF") and full (e.g., "#FFFFFF") hexadecimal formats.
 * It extracts the red, green, and blue components from the hexadecimal string, converts them to
 * decimal, and returns the RGB color as a string in the format "r,g,b".
 *
 * @param {string} hex - The hexadecimal color string to convert. Can be in short (3 characters) or full (6 characters) format.
 * @returns {string} The RGB representation of the input hexadecimal color, as a string in the format "r,g,b".
 */
export const hexToRgb = (hex: string): string => {
	let r = 0,
		g = 0,
		b = 0

	if (hex.length === 4) {
		r = parseInt(hex[1] + hex[1], 16)
		g = parseInt(hex[2] + hex[2], 16)
		b = parseInt(hex[3] + hex[3], 16)
	} else if (hex.length === 7) {
		r = parseInt(hex[1] + hex[2], 16)
		g = parseInt(hex[3] + hex[4], 16)
		b = parseInt(hex[5] + hex[6], 16)
	}
	return `${r},${g},${b}`
}
