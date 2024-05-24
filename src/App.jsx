function App() {
    return (
        <>
            <header>
                <div className="bg"></div>
                <h1>WORDLYTICS</h1>
            </header>
            <main className="container">
                <div className="textarea">
                    <textarea
                        className="textarea"
                        placeholder="Enter your text here"
                        spellCheck="false"
                    ></textarea>
                </div>

                <section className="stats">
                    <section className="stat">
                        <span className="stat-number">0</span>
                        <h4>Words</h4>
                    </section>
                    <section className="stat">
                        <span className="stat-number">0</span>
                        <h4>Characters</h4>
                    </section>
                    <section className="stat">
                        <span className="stat-number">2200</span>
                        <h4>Instagram / Tiktok</h4>
                    </section>
                    <section className="stat">
                        <span className="stat-number">500</span>
                        <h4>Pinterest</h4>
                    </section>
                </section>
            </main>
        </>
    );
}

export default App;
