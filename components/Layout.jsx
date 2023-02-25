import React from 'react'
import Header from './Header'

const Layout = ({children}) => {
    return (
        <div className='px-5 md:px-20'>
            <Header />
            {children}
        </div>
    )
}

export default Layout