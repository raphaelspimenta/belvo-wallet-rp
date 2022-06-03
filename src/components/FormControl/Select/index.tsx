
import { map } from 'lodash'
import { FC, useEffect, useState } from 'react'
import { StyledOption, StyledSelect } from './styled'

export interface Option {
    value: string,
    label: string,
}

export interface SelectProps {
    onChange: (value: string) => void,
    options?: Option[],
    value: any,
    placeholder?: string,
}

const getValue = (options: Option[] | undefined, value: string) => options?.find(option => option.value === value)

const Select: FC<SelectProps> = ({ onChange, options, value, placeholder }) => {
    const defaultValue = getValue(options, value)
    const [innerValue, setInnerValue] = useState<Option | undefined>(defaultValue)

    useEffect(() => {
        setInnerValue(getValue(options, value))
    }, [value])

    return (
        <StyledSelect placeholder={placeholder} value={innerValue?.value} onChange={({ target: { value } }) => onChange(value)}>
            {map(options, opt => <StyledOption key={opt.value} value={opt.value}>{opt.label}</StyledOption>)}
        </StyledSelect>
    )
}

export default Select
