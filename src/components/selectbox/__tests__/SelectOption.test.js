import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import SelectOption from '../SelectOption'

import theme from '../../../__theme__/theme'

const defaultProps = {}
const getInstance = (props = {}) => (
	<ThemeProvider theme={theme}>
		<SelectOption {...defaultProps} {...props} />
	</ThemeProvider>
)

describe('SelectOption', () => {
	it('matches snapshot', () => {
		const { asFragment } = render(getInstance())
		expect(asFragment()).toMatchSnapshot()
	})

	it('renders label', () => {
		const label = 'Foo'
		const { getByText } = render(getInstance({ label }))
		expect(getByText(label)).toBeInTheDocument()
	})

	it('renders option icon', () => {
		const icon = 'feature'
		const { getByTestId } = render(getInstance({ icon }))
		expect(getByTestId('__select-option-icon__')).toBeDefined()
	})

	it('triggers onClick callback', () => {
		const onClick = jest.fn()
		const { getByTestId } = render(getInstance({ value: 'foo', onClick }))
		fireEvent.click(getByTestId('__select-option__'))
		expect(onClick).toHaveBeenCalledWith('foo')
	})
})
