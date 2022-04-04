import React from "react";
import "./HomePage.scss";

export default function HomePage() {
    return (
        <main className="homepage">
            <section className="homepage__hero">
                <p className="homepage__hero-text">
                    We Help You Find the Finest American Traditional Tattooing
                    Establishments and Artists In Your Area
                </p>
            </section>
            <section>
                <h1>{`There's A Lot Going On`}</h1>
                <p>
                    {`Tattooing has grown rapidly over the last couple decades -
                    meaning more styles, more artists, and more tattoo parlours.
                    Maybe you think that's great, maybe you don't. Either way,
                    what you should think is that the American Traditional style
                    of tattooing deserves to be respected as a time tested,
                    badass, staple of the tattoo community.`}
                </p>
                <p>
                    {`That's why we made Expert Tattooing. Our mission is to help
                    you find local tattoo artists who excel in the American
                    Traditional style. We want you to know you'll be spending
                    your hard earned money on the best of the best. Looking for
                    geometric shapes or hyper realistic superhero tattoos? This
                    site is not for you. Looking for eagles, skulls, or roses?
                    Welcome, let's find you an expert.`}
                </p>
            </section>
        </main>
    );
}
