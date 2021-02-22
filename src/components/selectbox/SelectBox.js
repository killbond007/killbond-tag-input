import React, { Fragment, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { noop } from 'lodash'

import Tag from '../tag/Tag'

import * as Styled from './__styles__/SelectBox.styles'

const SelectBox = ({
	children,
	id,
	name,
	value,
	width,
	isMulti,
	isSearchable,
	isDisabled,
	placeholder,
	emptyLabel,
	autoFocus,
	defaultOpen,
	onSelect,
	...restProps
}) => {
	const inputRef = useRef(null)
	const rootRef = useRef(null)

	const [isOpen, setIsOpen] = useState(defaultOpen)
	const [inputValue, setInputValue] = useState('')
	const [inputWidth, setInputWidth] = useState(0)

	useEffect(() => {
		document.addEventListener('click', onClickOutside, false)
		return () => {
			document.removeEventListener('click', onClickOutside, false)
		}
	}, [isOpen])
	const onClickOutside = (e) => {
		if (rootRef.current && !rootRef.current.contains(e.target)) {
			setIsOpen(false)
		}
	}

	const toggle = () => {
		setIsOpen((isOpen) => !isOpen)
	}

	const onSelectBoxClick = (e) => {
		e.target.getAttribute('name') !== 'close' && toggle()
		isSearchable && inputRef.current.focus()
	}

	const onSelectOptionClick = (_value) => {
		if (isMulti) {
			value
				? Array.isArray(value)
					? onSelect(name, [...value, _value], id)
					: onSelect(name, [value, _value], id)
				: onSelect(name, [_value], id)
		} else {
			onSelect(name, _value, id)
		}
		if (isSearchable) {
			setInputValue('')
			setInputWidth(0)
			inputRef.current.value = ''
		}
		setIsOpen(false)
	}

	const onTagDelete = (i) => {
		const newValue = Array.isArray(value) ? [...value] : [value]
		newValue.splice(i, 1)
		onSelect(name, newValue, id)
	}

	const onInputChange = (e) => {
		const { value: inputValue, scrollWidth: inputWidth } = e.target
		setIsOpen(true)
		setInputValue(inputValue)
		setInputWidth(inputWidth)
	}

	const onInputKeyDown = (e) => {
		const { value: inputValue } = e.target
		if (!inputValue && e.key === 'Backspace') {
			value && onTagDelete(value.length - 1)
		}
	}

	let multiOptions = []

	let items = React.Children.toArray(children)

	if (items && isMulti && value) {
		multiOptions = items.filter(
			(child) =>
				value.indexOf(child.props.value) === -1 &&
				child.props.label.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1
		)
	}

	let selectedValues = isMulti && value ? (Array.isArray(value) ? value : [value]) : []

	return (
		<Styled.Root ref={rootRef} {...restProps}>
			<Styled.Box
				data-testid="__select-box__"
				width={width}
				isDisabled={isDisabled}
				isOpen={isOpen}
				isMulti={isMulti}
				autoFocus={autoFocus}
				onClick={!isDisabled ? onSelectBoxClick : null}
			>
				{isMulti ? (
					<Styled.MultiSelection>
						{selectedValues.map(
							(item, i) =>
								items.find(({ props }) => props.value === item) && (
									<Styled.Tag key={`value-${i}`}>
										<Tag id={i} onDelete={onTagDelete} hex={items.find(({ props }) => props.value === item).props.hex}>
											{items.find(({ props }) => props.value === item).props.label}
										</Tag>
									</Styled.Tag>
								)
						)}
						{isSearchable ? (
							<Styled.Input
								ref={inputRef}
								placeholder={selectedValues.length === 0 ? placeholder : null}
								width={selectedValues.length === 0 ? '100%' : inputWidth}
								onChange={onInputChange}
								onKeyDown={onInputKeyDown}
							/>
						) : (
							selectedValues.length === 0 && <Styled.Placeholder>{placeholder}</Styled.Placeholder>
						)}
					</Styled.MultiSelection>
				) : isSearchable ? (
					<Styled.Selection>
						{items.find(({ props }) => props.value === value && props.icon !== null) && (
							<Styled.Icon
								data-testid="__select-icon__"
								isOpen={isOpen}
								name={items.find(({ props }) => props.value === value).props.icon}
							/>
						)}
						<Styled.SingleInput
							ref={inputRef}
							placeholder={value ? items.find(({ props }) => props.value === value).props.label : placeholder}
							width={width - 40}
							isSelected={value}
							onChange={onInputChange}
						/>
					</Styled.Selection>
				) : !value ? (
					<Styled.SelectPlaceholder>{placeholder}</Styled.SelectPlaceholder>
				) : (
					<Styled.Selection>
						{items.find(({ props }) => props.value === value && props.icon !== null) && (
							<Styled.Icon
								data-testid="__select-icon__"
								isOpen={isOpen}
								name={items.find(({ props }) => props.value === value)?.props?.icon}
							/>
						)}
						<Styled.Label>{items.find(({ props }) => props.value === value)?.props?.label}</Styled.Label>
					</Styled.Selection>
				)}
				<Styled.Arrow isOpen={isOpen} />
			</Styled.Box>
			{isOpen && (
				<Fragment>
					<Styled.Menu>
						{isMulti
							? value &&
							  (items.length === value.length || multiOptions.length === 0) && (
									<Styled.HasNoOptions>{emptyLabel}</Styled.HasNoOptions>
							  )
							: items.filter((child) => child.props.label.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1)
									.length === 0 && <Styled.HasNoOptions>{emptyLabel}</Styled.HasNoOptions>}
						{items &&
							React.Children.map(items, (child, i) =>
								isMulti
									? (value ? value.indexOf(child.props.value) === -1 : true) &&
									  child.props.label.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1 &&
									  React.cloneElement(child, {
											key: `option-${i}`,
											onClick: onSelectOptionClick,
									  })
									: isSearchable
									? child.props.label.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1 &&
									  React.cloneElement(child, {
											key: `option-${i}`,
											onClick: onSelectOptionClick,
									  })
									: React.cloneElement(child, {
											key: `option-${i}`,
											onClick: onSelectOptionClick,
									  })
							)}
					</Styled.Menu>
					<Styled.Line />
				</Fragment>
			)}
		</Styled.Root>
	)
}

SelectBox.propTypes = {
	/** Defines the id of the selectBox */
	id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	/** Defines the name of the selectBox */
	name: PropTypes.string,
	/** Defines the value of the selectBox */
	value: PropTypes.oneOfType([PropTypes.any, PropTypes.arrayOf(PropTypes.any)]),
	/** Defines the width of the selectBox */
	width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	/** Defines if several items can be selected in the selectBox */
	isMulti: PropTypes.bool,
	/** Defines if the items can be searched in the selectBox */
	isSearchable: PropTypes.bool,
	/** Defines the default label when no selected item */
	placeholder: PropTypes.string,
	/** Defines the text display in the empty menu */
	emptyLabel: PropTypes.string,
	/** Defines the default focus by default */
	autoFocus: PropTypes.bool,
	/** Defines the default open state of dropdown */
	defaultOpen: PropTypes.bool,
	/** Defines the handler called when an option is selected */
	onSelect: PropTypes.func,
	/** Defines the options type */
	children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
}

SelectBox.defaultProps = {
	id: null,
	name: null,
	value: null,
	width: 'auto',
	isMulti: false,
	isSearchable: false,
	placeholder: null,
	emptyLabel: null,
	autoFocus: false,
	defaultOpen: false,
	onSelect: noop,
	children: null,
}

export default SelectBox
