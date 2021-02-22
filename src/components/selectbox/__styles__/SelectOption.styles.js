import styled from 'styled-components'

import { getColor } from '../../../helpers/themeHelpers'

export const Root = styled.div(({ theme }) => ({
	minHeight: 32,
	paddingLeft: 16,
	paddingRight: 32,
	display: 'flex',
	alignItems: 'center',
	cursor: 'pointer',
	borderRadius: 3,
	':hover': {
		backgroundColor: getColor(theme, 'purple_2', 'opacity_6'),
		'& div': {
			color: getColor(theme, 'purple_1'),
		},
		'& span': {
			color: getColor(theme, 'purple_1'),
		},
	},
}))

export const Label = styled.div(({ theme }) => ({
	...theme.typography.body,
	color: getColor(theme, 'dark'),
	textAlign: 'left',
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	whiteSpace: 'nowrap',
}))

export const Icon = styled.span(({ theme, name }) => ({
	...theme.typography.icon_small,
	...theme.icons[name],
	color: getColor(theme, 'dark'),
	marginRight: 8,
}))
