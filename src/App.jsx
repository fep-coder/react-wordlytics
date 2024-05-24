import Stat from "./Stat";
import Textarea from "./Textarea";
import Header from "./Header";

function App() {
    return (
        <>
            <Header />
            <main className="container">
                <Textarea />
                <section className="stats">
                    <Stat text="Characters" number="0" />
                    <Stat text="Words" number="0" />
                    <Stat text="Instagrams / Tiktok" number="2200" />
                    <Stat text="Pinterest" number="500" />
                </section>
            </main>
        </>
    );
}

export default App;
