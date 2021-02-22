import styled from 'styled-components'

import { getColor } from '../../../helpers/themeHelpers'

export const Root = styled.div({
	position: 'relative',
	display: 'inline-block',
	userSelect: 'none',
})

export const Box = styled.button(({ theme, isOpen, width, isMulti, isDisabled }) => ({
	...theme.typography.body,
	...theme.shadows.small,
	width,
	borderRadius: isOpen ? '3px 3px 0px 0px' : 3,
	minHeight: 40,
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	padding: '4px 16px',
	textAlign: 'left',
	backgroundColor: isDisabled ? getColor(theme, 'light_grey', 'opacity_5') : getColor(theme, 'white'),
	border: '1px solid ' + getColor(theme, 'light_grey'),
	borderBottomColor: isOpen ? theme.colors.white : getColor(theme, 'light_grey'),
	color: isOpen ? getColor(theme, 'grey_shades') : getColor(theme, 'purple_1'),
	':focus': {
		...theme.borders.focused,
	},
}))

export const Arrow = styled.div(({ theme, isOpen }) => ({
	content: '',
	width: '0',
	height: '0',
	border: '5px solid transparent',
	marginTop: isOpen ? 0 : 6,
	marginBottom: isOpen ? 6 : 0,
	borderColor: isOpen
		? `transparent transparent ${getColor(theme, 'purple_1')} transparent`
		: `${getColor(theme, 'purple_1')} transparent transparent transparent`,
}))

export const Placeholder = styled.span(({ theme }) => ({
	...theme.typography.body,
	color: getColor(theme, 'light_grey'),
	marginBottom: 6,
	marginTop: 2,
}))

export const SelectPlaceholder = styled.span(({ theme }) => ({
	...theme.typography.body,
	color: getColor(theme, 'dark'),
}))

export const Selection = styled.div({
	display: 'flex',
	alignItems: 'center',
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	whiteSpace: 'nowrap',
})

export const MultiSelection = styled.div({
	display: 'flex',
	alignItems: 'center',
	flexWrap: 'wrap',
	width: '100%',
})
export const SingleInput = styled.input(({ width, theme, isSelected }) => ({
	...theme.typography.body,
	width: width,
	height: 20,
	'::-webkit-input-placeholder': {
		/* Chrome/Opera/Safari */
		color: getColor(theme, isSelected ? 'purple_1' : 'light_grey'),
	},
	'::-moz-placeholder': {
		/* Firefox 19+ */
		color: getColor(theme, isSelected ? 'purple_1' : 'light_grey'),
	},
	':-ms-input-placeholder': {
		/* IE 10+ */
		color: getColor(theme, isSelected ? 'purple_1' : 'light_grey'),
	},
	':-moz-placeholder': {
		/* Firefox 18- */
		color: getColor(theme, isSelected ? 'purple_1' : 'light_grey'),
	},
}))

export const Input = styled.input(({ width, theme }) => ({
	...theme.typography.body,
	minWidth: 2,
	width: width,
	marginBottom: 4,
	height: 24,
	'::-webkit-input-placeholder': {
		/* Chrome/Opera/Safari */
		color: getColor(theme, 'light_grey'),
	},
	'::-moz-placeholder': {
		/* Firefox 19+ */
		color: getColor(theme, 'light_grey'),
	},
	':-ms-input-placeholder': {
		/* IE 10+ */
		color: getColor(theme, 'light_grey'),
	},
	':-moz-placeholder': {
		/* Firefox 18- */
		color: getColor(theme, 'light_grey'),
	},
}))

export const Icon = styled.span(({ theme, isOpen, name }) => ({
	...theme.typography.icon_small,
	...theme.icons[name],
	color: isOpen ? getColor(theme, 'grey_shades') : getColor(theme, 'purple_1'),
	marginRight: 8,
}))

export const Label = styled.div({
	textAlign: 'left',
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	whiteSpace: 'nowrap',
})

export const Tag = styled.span({
	margin: '0px 8px 4px 0px',
	display: 'inline-block',
})

export const Line = styled.div(({ theme }) => ({
	content: '',
	position: 'absolute',
	bottom: 0,
	left: '50%',
	width: '90%',
	height: 0,
	zIndex: 100,
	opacity: 0.25,
	borderBottom: `1px solid ${getColor(theme, 'grey_shades')}`,
	transform: 'translateX(-50%)',
}))

export const Menu = styled.div(({ theme }) => ({
	position: 'absolute',
	top: '100%',
	left: 0,
	right: 0,
	display: 'block',
	padding: '4px 0px 4px 0px',
	transition: 'max-height 0.1s linear',
	zIndex: 100,
	backgroundColor: getColor(theme, 'white'),
	borderRadius: '0 0 3px 3px',
	overflowY: 'scroll',
	border: `1px solid ${getColor(theme, 'light_grey')}`,
	boxShadow: `1px 1px 0 0 ${getColor(theme, 'light_grey', 'opacity_4')}`,
	borderTopWidth: 0,
	maxHeight: 320,
}))

export const HasNoOptions = styled.div(({ theme }) => ({
	...theme.typography.body,
	textAlign: 'center',
	height: 36,
	lineHeight: '32px',
	color: getColor(theme, 'light_grey'),
}))
