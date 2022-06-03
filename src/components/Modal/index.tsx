import { FC, useRef } from 'react'
import ReactDOM from 'react-dom'
import { Background, Content, HeaderRow, ScrollDisabler, XButton } from './styled'

interface Props {
    isOpen: boolean,
    close: () => void,
}

const Modal: FC<Props> = ({ isOpen, close, children }) => {
    const contentRef = useRef<any>()
    const portalRoot = document.getElementById('portal-root')

    if (!isOpen || !portalRoot) return null

    return ReactDOM.createPortal(
        <>
            <Background>
                <Content ref={contentRef}>
                    <HeaderRow>
                        <XButton onClick={close} />
                    </HeaderRow>
                    {children}
                </Content>
            </Background>
            <ScrollDisabler />
        </>,
        portalRoot
    )
}

export default Modal
