import React from 'react'
import PropTypes from 'prop-types'
import { noop } from 'lodash'

import * as Styled from './__styles__/SelectOption.styles'

const SelectOption = ({ value, label, onClick, icon }) => {
	const _onClick = () => onClick(value)

	return (
		<Styled.Root data-testid="__select-option__" value={value} onClick={_onClick}>
			{icon && <Styled.Icon data-testid="__select-option-icon__" name={icon} />}
			<Styled.Label>{label}</Styled.Label>
		</Styled.Root>
	)
}

SelectOption.propTypes = {
	/** Defines the value of the option */
	value: PropTypes.any,
	/** Defines the label of the option */
	label: PropTypes.string,
	/** Defines the source of the icon  */
	icon: PropTypes.string,
	/** Defines the handler called on click */
	onClick: PropTypes.func,
}

SelectOption.defaultProps = {
	value: null,
	label: null,
	icon: null,
	onClick: noop,
}

export default SelectOption
