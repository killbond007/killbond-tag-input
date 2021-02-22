import styled from 'styled-components'

import { getColor } from '../../../helpers/themeHelpers'

export const Root = styled.div({
	position: 'relative',
	alignSelf: 'flex-start',
	display: 'inline-block',
	userSelect: 'none',
})

export const Box = styled.button(({ theme, isOpen }) => ({
	...theme.typography.body,
	borderRadius: 3,
	width: '100%',
	minHeight: 36,
	padding: '10px 16px 10px 8px',
	textAlign: 'left',
	background: isOpen ? getColor(theme, 'white', 'opacity_5') : 'none',
	border: 'none',
	color: getColor(theme, 'white'),
	display: 'flex',
	alignItems: 'center',
	':hover': {
		background: getColor(theme, 'white', 'opacity_5'),
	},
}))

export const Icon = styled.span(({ theme, name }) => ({
	...theme.typography.icon_small,
	...theme.icons[name],
	marginRight: 8,
}))

export const Menu = styled.div(({ theme }) => ({
	position: 'absolute',
	width: 189,
	bottom: `calc(100% + 5px)`,
	left: 0,
	right: 0,
	display: 'block',
	zIndex: 100000,
	backgroundColor: getColor(theme, 'white'),
	borderRadius: 3,
	padding: 8,
}))
