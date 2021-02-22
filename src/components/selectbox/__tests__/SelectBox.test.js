import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import SelectBox from '../SelectBox'
import SelectOption from '../SelectOption'

import { getColorJest } from '../../../helpers/themeHelpers'

import theme from '../../../__theme__/theme'

const defaultProps = {}
const getInstance = (props = {}) => (
	<ThemeProvider theme={theme}>
		<SelectBox {...defaultProps} {...props}>
			<SelectOption value="foo" label="Foo" />
			<SelectOption value="bar" label="Bar" />
			<SelectOption value="gag" label="Gag" />
		</SelectBox>
	</ThemeProvider>
)

describe('SelectBox', () => {
	it('matches snapshot', () => {
		const { asFragment } = render(getInstance())
		expect(asFragment()).toMatchSnapshot()
	})

	it('renders width', () => {
		const width = 200
		const { getByTestId } = render(getInstance({ width }))
		expect(getByTestId('__select-box__')).toHaveStyleRule('width', `${width}px`)
	})

	it('renders placeholder', () => {
		const placeholder = 'Select an option'
		const { getByText } = render(getInstance({ placeholder }))
		expect(getByText(placeholder)).toBeInTheDocument()
	})

	it('renders value', () => {
		const value = 'foo'
		const { getByText } = render(getInstance({ value }))
		expect(getByText('Foo')).toBeInTheDocument()
	})

	it('renders isDisabled', () => {
		const { getByTestId } = render(getInstance({ isDisabled: true }))
		expect(getByTestId('__select-box__')).toHaveStyleRule(
			'background-color',
			getColorJest(theme, 'light_grey', 'opacity_5')
		)
	})

	it('triggers onSelect callback', () => {
		const onSelect = jest.fn()
		const { getAllByTestId, getByTestId } = render(getInstance({ onSelect }))
		fireEvent.click(getByTestId('__select-box__'))
		fireEvent.click(getAllByTestId('__select-option__')[0])
		expect(onSelect).toHaveBeenCalledWith(null, 'foo', null)
	})

	it('renders options on click', () => {
		const { queryAllByTestId, getByTestId } = render(getInstance())
		expect(queryAllByTestId('__select-option__')).toHaveLength(0)
		fireEvent.click(getByTestId('__select-box__'))
		expect(queryAllByTestId('__select-option__')).toHaveLength(3)
	})
})
