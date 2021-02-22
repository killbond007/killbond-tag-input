import Color from 'color'
import { get } from 'lodash'

export const getColor = (theme, color = '#000', opacity = 1) => {
	color = get(theme, `colors[${color}]`) || color
	opacity = get(theme, `opacities[${opacity}]`) || opacity
	return Color(color).alpha(opacity).string()
}

export const getColorJest = (...args) => {
	return getColor(...args).replace(/, /g, ',')
}
