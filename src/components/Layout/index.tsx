import React, { FC } from 'react'
import Sidebar from '../Sidebar'
import { SLayout, SMain } from './styles'

const Layout: FC = ({ children }) => (
    <SLayout>
        <Sidebar />
        <SMain>{children}</SMain>
    </SLayout>
)

export default Layout
