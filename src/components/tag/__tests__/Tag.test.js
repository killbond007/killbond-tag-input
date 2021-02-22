import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import theme from '../../../__theme__/theme'

import Tag from '../Tag'

const defaultProps = {}
const getInstance = (props = {}) => (
	<ThemeProvider theme={theme}>
		<Tag {...defaultProps} {...props} />
	</ThemeProvider>
)

describe('Tag', () => {
	it('matches snapshot', () => {
		const { asFragment } = render(getInstance())
		expect(asFragment()).toMatchSnapshot()
	})

	it('renders children', () => {
		const children = 'foo'
		const { getByTestId } = render(getInstance({ children }))
		expect(getByTestId('__tag-root__')).toHaveTextContent(children)
	})

	it('triggers onDelete', () => {
		const onDelete = jest.fn()
		const { getByTestId } = render(getInstance({ onDelete, children: 'foo', id: 1 }))
		fireEvent.click(getByTestId('__tag-close__'))
		expect(onDelete).toHaveBeenCalledWith(1, 'foo')
	})
})
