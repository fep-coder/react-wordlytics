function Stat({ text, number }) {
    return (
        <section className="stat">
            <span className="stat-number">{number}</span>
            <h4>{text}</h4>
        </section>
    );
}

export default Stat;
