import styled from 'styled-components'

export const StyledSelect = styled.select`
    max-width: 100%;
    width: 100%;
    padding: 11px 13px;
    color: ${({ theme }) => theme.colors.font.primary};
    margin-bottom: 0.9rem;
    border-radius: 4px;
    outline: 0;
    border: 1px solid rgba(245, 245, 245, 0.7);
    font-size: 14px;
    transition: all 0.3s ease-out;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
    :focus, :hover {
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
    }
`

export const StyledOption = styled.option`
    font-size: 14px;
`
