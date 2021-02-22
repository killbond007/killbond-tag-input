import React from 'react'
import PropTypes from 'prop-types'
import { noop } from 'lodash'

import * as Styled from './__styles__/Tag.styles'

const Tag = ({ id,hex, children, onDelete }) => {
	const _onDelete = () => {
		onDelete && onDelete(id, children)
	}
	console.log(hex,12)
	return (
		<Styled.Root data-testid="__tag-root__">
			<Styled.Label $hex={hex}>{children}</Styled.Label>
            <Styled.Icon data-testid="__tag-close__" name="close" onClick={_onDelete}>x</Styled.Icon>
		</Styled.Root>
	)
}

Tag.propTypes = {
	/** Defines the id of the tag */
	id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	/** Defines the value of the tag */
	children: PropTypes.string,
	/** Defines the handler called when the delete icon is clicked */
	onDelete: PropTypes.func,
}

Tag.defaultProps = {
	id: null,
	children: null,
	onDelete: noop,
}

export default Tag
