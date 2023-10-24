import "./Hero.css"

const Hero = () => {
    return (
        <div className="hero">
            <div>
           
            <h1 className="emergency">Emergency?</h1>
            <h2 className="near">Find Nearest</h2>
            <h4 className="med">Medical Facility</h4>
            </div>
            <div>
                <button  className="btn">Let's go</button>
            </div>

        </div>
    )
}

export default Hero;