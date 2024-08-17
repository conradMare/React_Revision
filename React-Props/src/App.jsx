import React from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
    return (
        <div>
            <h1>Images</h1>
            <Card name="random image 1" img="https://picsum.photos/536/354" tel="+27 123 4567 890" email="random@mail.com"/>
            <Card name2="random image 2" img2="https://picsum.photos/536/355" tel2="+27 098 7654 321" email2="random2@mail.com"/>
        </div>
    );
}

export default App;