
function Button() {

    const styles = {
        background: "linear-gradient(90deg, #061363, rgb(0, 255, 242))",
        color: "white",
        padding: "10px 20px",
        borderRadius: "10px",
        border: "none",
        cursor: "pointer",
    }

    return (
        <button style={styles}>Click Me</button>
    );
}

export default Button