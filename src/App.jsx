import Stat from "./Stat";
import Textarea from "./Textarea";
import Header from "./Header";
import { useState } from "react";

function App() {
    const [text, setText] = useState("");

    const numberOfCharacters = text.length;
    const numberOfWords = text
        .trim()
        .split(/\s+/)
        .filter((x) => x != "").length;
    const instagramCharactersLeft = 2200 - numberOfCharacters;
    const pinterestCharactersLeft = 500 - numberOfCharacters;

    return (
        <>
            <Header />
            <main className="container">
                <Textarea text={text} setText={setText} />
                <section className="stats">
                    <Stat text="Characters" number={numberOfCharacters} />
                    <Stat text="Words" number={numberOfWords} />
                    <Stat
                        text="Instagram / Tiktok"
                        number={instagramCharactersLeft}
                    />
                    <Stat text="Pinterest" number={pinterestCharactersLeft} />
                </section>
            </main>
        </>
    );
}

export default App;
