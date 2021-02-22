import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import UserSelectOption from '../UserSelectOption'

import theme from '../../../__theme__/theme'

const defaultProps = {}
const getInstance = (props = {}) => (
	<ThemeProvider theme={theme}>
		<UserSelectOption {...defaultProps} {...props} />
	</ThemeProvider>
)

describe('UserSelectOption', () => {
	it('matches snapshot', () => {
		const { asFragment } = render(getInstance())
		expect(asFragment()).toMatchSnapshot()
	})

	it('renders label', () => {
		const label = 'Foo'
		const { getByText } = render(getInstance({ label }))
		expect(getByText(label)).toBeInTheDocument()
	})

	it('triggers onClick callback', () => {
		const onClick = jest.fn()
		const { getByTestId } = render(getInstance({ value: 'foo', label: 'Foo', onClick }))
		fireEvent.click(getByTestId('__user-select-option__'))
		expect(onClick).toHaveBeenCalledWith('foo', 'Foo')
	})
})
