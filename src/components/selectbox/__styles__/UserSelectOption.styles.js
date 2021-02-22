import styled from 'styled-components'

import { getColor } from '../../../helpers/themeHelpers'

export const Root = styled.option(({ theme }) => ({
	...theme.typography.body,
	minHeight: 32,
	paddingLeft: 8,
	paddingRight: 8,
	display: 'flex',
	alignItems: 'center',
	cursor: 'pointer',
	color: getColor(theme, 'dark_indigo'),
	borderRadius: 3,
	':hover': {
		backgroundColor: getColor(theme, 'purple_2', 'opacity_6'),
	},
}))
