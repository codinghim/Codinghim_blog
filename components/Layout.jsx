import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
    return (
        <div className='px-5 md:px-20'>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout