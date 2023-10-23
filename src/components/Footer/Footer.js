import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="copyright">
                <p>@copy 2023 - Smart HCL</p>
            </div>
            <div className="social">
                <a href="#" className="support">Contact Us</a>
                <a href="#" className="face">Facebook</a>
                <a href="#" className="tweet">Twitter</a>
                <a href="#" className="linked">LinkedIN</a>
            </div>
        </div>
    )
}

export default Footer;