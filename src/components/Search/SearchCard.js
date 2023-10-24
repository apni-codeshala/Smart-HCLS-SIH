import "./SearchCard.css"

const SearchCard = () => {
    return (
        <div className="hospital-card">
            <img src="https://th.bing.com/th/id/OIP.u-sU6p8lCX62qAYKNXGaQwHaFf?w=275&h=204&c=7&r=0&o=5&dpr=1.3&pid=1.7" />
            <div className="hospital-details">
                <h1>Smriti Healthcare</h1>
                <p><span>Address : </span>321, Tsp Road, Opp Blore Medical College, Kalasipalyam</p>
                <p><span>City : </span>Bangalore</p>
                <p><span>State/UT : </span>Karnataka</p>
                <p><span>Contact No : </span>26704234</p>
                <p><span>Schemes : </span>Ayushman</p>
                <p><span>Treatment : </span>Diabetes</p>
            </div>
        </div>
    );
}

export default SearchCard;