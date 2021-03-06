import React from "react";
import CityButton from "../../components/CityButton/CityButton";
import "./HomePage.scss";

export default function HomePage() {
    // TODO use hooks and axios to get cities info
    const cities = ["New York", "Austin", "Los Angeles"];

    return (
        <main className="homepage">
            <section className="homepage__hero">
                <p className="homepage__hero-text">
                    We Help You Find the Finest Traditional Tattooing
                    Establishments and Artists In Your Area
                </p>
            </section>
            <section className="homepage__description">
                <h1 className="homepage__description-heading">{`There's A Lot Going On`}</h1>
                <p className="homepage__description-text">
                    {`Tattooing has grown rapidly over the last couple decades -
                    meaning more styles, more artists, and more tattoo parlours.
                    Maybe you think that's great, maybe you don't. Either way,
                    what you should think is that the Traditional style
                    of tattooing deserves to be respected as a time tested,
                    badass, staple of the tattoo community.`}
                </p>
                <p className="homepage__description-text">
                    {`That's why we made Expert Tattooing. Our mission is to help
                    you find local tattoo artists who excel in one of the many Traditional styles. We want you to know you'll be spending
                    your hard earned money on the best of the best. Looking for
                    geometric shapes or hyper-realistic superhero tattoos? This
                    site is not for you. Looking for eagles? Skulls? Dragons? Lady Heads?
                    Welcome, let's find you an expert.`}
                </p>
            </section>
            {/* TODO change index to id once you have server set up */}
            <section className="homepage__cities">
                {cities.map((city, index) => (
                    <CityButton city={city} key={index} />
                ))}
            </section>
        </main>
    );
}
