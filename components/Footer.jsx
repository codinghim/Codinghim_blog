import React from 'react'
import Styles from '@/styles/footer.module.scss'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer id="contactus" className={Styles.footer}>
            <div className={Styles.icons_container}>
                <a href="https://github.com/codinghim" target="_blank" rel="noopener noreferrer"><Image src={"/logo/GitHub-Mark.png"} width={40} height={40}/></a>
                <a href="https://www.linkedin.com/in/daniel-himchan-yun/" target="_blank" rel="noopener noreferrer"><Image src={"/logo/linkedin.png"} width={40} height={40}/></a>
                <a href="https://danielhimchanyun.com"><Image src={"/logo/web.png"} width={40} height={40}/></a>
            </div>
            <p className={Styles.copyright}>
                {/* <br /> */}
                Copyright &copy; 2023 Daniel Himchan Yun <br />All rights reserved<br /><br />
                <a href="https://www.flaticon.com/free-icons/website" title="website icons">Website icons created by Uniconlabs - Flaticon</a><br />
                <a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">Linkedin icons created by Freepik - Flaticon</a><br />
            </p>
            
        </footer>
    )
}

export default Footer