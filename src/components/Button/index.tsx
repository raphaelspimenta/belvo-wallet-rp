import styled, { keyframes } from 'styled-components'
import { PrimaryFont } from '../Typography/FontFaces'

const jump = keyframes`
  from{
    transform: translateY(0)
  }
  to{
    transform: translateY(-3px)
  }
`

// f03d4e
export const PrimaryButton = styled.button`
  ${PrimaryFont}
  background: ${({ theme }) => theme.colors.general.primaryActive};
  color: ${({ theme }) => theme.colors.general.white};
  max-width: 100%;
  padding: 11px 13px;
  font-weight: 600;
  text-transform: uppercase;
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px ${({ theme }) => theme.colors.background.soft}, 0 1px 2px ${({ theme }) => theme.colors.background.soft};
  transition: all 0.3s ease-out;
  :hover {
    background: ${({ theme }) => theme.colors.general.primaryHover};
    animation: ${jump} 0.2s ease-out forwards;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.general.primaryHover};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.general.primaryInactive};
  }
`
