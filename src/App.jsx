import Stat from "./Stat";
import Textarea from "./Textarea";
import Header from "./Header";
import { useState } from "react";

function App() {
    const [text, setText] = useState("");
    const numberOfCharacters = text.length;

    return (
        <>
            <Header />
            <main className="container">
                <Textarea text={text} setText={setText} />
                <section className="stats">
                    <Stat text="Characters" number={numberOfCharacters} />
                    <Stat text="Words" number="0" />
                    <Stat text="Instagrams / Tiktok" number="2200" />
                    <Stat text="Pinterest" number="500" />
                </section>
            </main>
        </>
    );
}

export default App;
