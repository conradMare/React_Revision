import quoteOfTheDay from "./assets/images/InspirationalQuote.jpg"

function  Card() {
    return(
        <div className="card">
        <img className="card-image" src={quoteOfTheDay} alt="Quote of the day"></img>
        <h2 className="card-title">Quote of the Day</h2>
        <p className="card-text">Be there for others, but never leave yourself behind</p>
        </div>
    );
}

export default Card