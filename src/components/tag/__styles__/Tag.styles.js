import styled from 'styled-components'
import { getColor } from '../../../helpers/themeHelpers'

export const Root = styled.span(({ theme }) => ({
	color: getColor(theme, 'white'),
	display: 'inline-flex',
	minHeight: 24,
}))

export const Label = styled.span(({ theme,$hex }) => ({
	...theme.typography.body,
	backgroundColor: $hex?`#${$hex}`:getColor(theme, 'purple_1'),
	borderBottomLeftRadius: 3,
	borderTopLeftRadius: 3,
	color: getColor(theme, 'white'),
	padding: '0px 5px 0px 8px',
	display: 'flex',
	alignItems: 'center',
}))

export const Icon = styled.span(({ theme }) => ({
	backgroundColor: getColor(theme, 'purple_1'),
	borderBottomRightRadius: 3,
	borderTopRightRadius: 3,
	padding: '0px 5px 0px 5px',
	display: 'flex',
	alignItems: 'center',
	':hover': {
		backgroundColor: getColor(theme, 'purple_1', 'opacity_4'),
		cursor: 'pointer',
	},
}))
