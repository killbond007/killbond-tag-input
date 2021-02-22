import React from 'react'
import PropTypes from 'prop-types'
import { noop } from 'lodash'

import * as Styled from './__styles__/UserSelectOption.styles'

const UserSelectOption = ({ value, label, onClick }) => {
	const _onClick = () => onClick(value, label)
	return (
		<Styled.Root data-testid="__user-select-option__" value={value} onClick={_onClick}>
			{label}
		</Styled.Root>
	)
}

UserSelectOption.propTypes = {
	/** Defines the value of the option */
	value: PropTypes.any,
	/** Defines the label of the option */
	label: PropTypes.string,
	/** Defines the handler called on click */
	onClick: PropTypes.func,
}

UserSelectOption.defaultProps = {
	value: null,
	label: null,
	onClick: noop,
}

export default UserSelectOption
