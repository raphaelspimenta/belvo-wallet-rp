import { FC } from 'react'
import { LoaderWrapper, StyledSpinner } from './styled'

const Loader: FC = () => (
    <LoaderWrapper>
        <StyledSpinner viewBox="0 0 50 50">
            <circle
                className="path"
                cx="25"
                cy="25"
                r="20"
                fill="none"
                strokeWidth="4"
            />
        </StyledSpinner>
    </LoaderWrapper>
)

export default Loader
