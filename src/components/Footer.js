import React from 'react'
import Header from './Header'

const Footer = (props) => {
    return (
        <div className="container-fluid mt-5">
            <div className="bg-dark" style={{ width: "100%", height:"auto",padding:"3px" }}>
                <div class="d-flex  flex-lg-row justify-content-center align-items-center ">
                    {/* <div className="m-3"><a href="mailto:ta37303@gmail.com" style={{ color: "white",fontFamily:"monospace" }}>E-mail me</a></div>
                    <div className="m-3"><a href="tel:9322097034" style={{ color: "white",fontFamily:"monospace"}}>Call Me</a></div> */}
                    <div className="m-3"><a href="mailto:ta37303@gmail.com" ><img src={props.imageE} width="25px"/></a></div>
                    <div className="m-3"><a href="tel:9322097034" ><img src={props.imageC} width="25px"/></a></div>
                    <div className="m-3"><a href="https://github.com/Talha-stack-ui" ><img src={props.imageG} width="25px"/></a></div>
                </div>
            </div>
        </div>
    )
}

export default Footer
