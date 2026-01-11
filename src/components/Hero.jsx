import { useEffect } from "react"

function Hero() {



    return (
        <section id="hero">
            <div>
                <h1>MacBook Pro</h1>
                <img src="/title.png" alt="MacBookPro" />
            </div>
            <video src="/videos/hero.mp4" autoPlay muted playsInline></video>

            <button>Buy</button>

            <p>From $1559 or $133 / mo for 12 mouths</p>
        </section>
    )
}

export default Hero
