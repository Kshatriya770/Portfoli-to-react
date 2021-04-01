import React from "react"

const Hero = () => {
    return(
        <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
    <div className="hero-container" data-aos="fade-in">
      <h2>Hello there!</h2>
      <h3>My name is</h3>
      <h1>Saurabh Singh</h1>
      <p>I'm <span className="typed" data-typed-items="Designer, Developer, Freelancer, Tech Enthusiast"></span></p>
    </div>
  </section>
    )
}

export default Hero;