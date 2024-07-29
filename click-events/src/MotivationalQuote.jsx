
function MotivationalQuote() {

    const imageURL = "./src/assets/MotivationalQuote.jpeg";

    const handleClick = (e) => e.target.style.display = "none";

    return(
        <img onClick={(e) => handleClick(e)} src={imageURL}></img>
    );
}

export default MotivationalQuote