import React from "react";
import Feature from "../Components/Feature";

const Home = () => {
  const data = [
    {
      id: 0,
      title: "You are our #1 priority",
      content:
        "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
      image: "./img/icon-chat.png",
      alt: "Chat Icon",
    },
    {
      id: 1,
      title: "More savings means higher rates",
      content:
        "The more you save with us, the higher your interest rate will be!",
      image: "./img/icon-money.png",
      alt: "Money Icon",
    },

    {
      id: 2,
      title: "Service",
      content:
        "We use top of the line encryption to make sure your data and money is always safe.",
      image: "./img/icon-security.png",
      alt: "Security Icon",
    },
  ];

  return (
    <div className="home">
      <section className="hero">
        <h1 className="hero-title">Hero content</h1>
        <div className="hero-content">
          <h2 className="subtitle">No fees.</h2>
          <h2 className="subtitle">No minimum deposit.</h2>
          <h2 className="subtitle">High interest rates.</h2>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </div>
      </section>
      <section className="features">
        <Feature
          title={data[0].title}
          content={data[0].content}
          image={data[0].image}
          alt={data[0].alt}
        />

        <Feature
          title={data[1].title}
          content={data[1].content}
          image={data[1].image}
          alt={data[1].alt}
        />

        <Feature
          title={data[2].title}
          content={data[2].content}
          image={data[2].image}
          alt={data[2].alt}
        />
      </section>
    </div>
  );
};

export default Home;
