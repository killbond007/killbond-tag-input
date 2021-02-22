import { getColor, getColorJest } from '../themeHelpers'

const theme = {
	colors: {
		color_1: 'rgb(54, 78, 211)',
		color_2: '#ff0000',
	},
	opacities: {
		opacity_1: 0.8,
		opacity_2: 0.4,
	},
}

describe('themeHelpers', () => {
	describe('getColor', () => {
		it('returns rgb color', () => {
			expect(getColor(theme, 'color_1')).toBe('rgb(54, 78, 211)')
		})

		it('returns hex color', () => {
			expect(getColor(theme, 'color_2')).toBe('rgb(255, 0, 0)')
		})

		it('returns opacity', () => {
			expect(getColor(theme, undefined, 'opacity_2')).toBe('rgba(0, 0, 0, 0.4)')
		})

		it('returns custom color', () => {
			expect(getColor(theme, '#FF0000', 'opacity_1')).toBe('rgba(255, 0, 0, 0.8)')
		})

		it('returns color and opacity', () => {
			expect(getColor(theme, 'color_2', 'opacity_1')).toBe('rgba(255, 0, 0, 0.8)')
		})
	})

	describe('getColorJest', () => {
		it('returns rgb color', () => {
			expect(getColorJest(theme, 'color_1')).toBe('rgb(54,78,211)')
		})

		it('returns hex color', () => {
			expect(getColorJest(theme, 'color_2')).toBe('rgb(255,0,0)')
		})

		it('returns opacity', () => {
			expect(getColorJest(theme, undefined, 'opacity_2')).toBe('rgba(0,0,0,0.4)')
		})

		it('returns custom color', () => {
			expect(getColorJest(theme, '#FF0000', 'opacity_1')).toBe('rgba(255,0,0,0.8)')
		})

		it('returns color and opacity', () => {
			expect(getColorJest(theme, 'color_2', 'opacity_1')).toBe('rgba(255,0,0,0.8)')
		})
	})
})
