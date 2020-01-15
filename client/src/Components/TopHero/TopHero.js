import React from 'react';

/* Usage:
* <TopHero
*   title
*   subtitle
*   imgPath
*   btnText
*
*
*
* */


const TopHero = props => {
  return <section id="hero" className="wow fadeIn">
    <div className="hero-container">
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
      <img src={props.imgPath} alt="Hero Imgs"/>
      <a href="get-started" className="btn-get-started scrollto">{props.btnText}</a>
      <div className="btns">
        <a href="/"><i className="fa fa-apple fa-3x"/> asddddd</a>
        <a href="/"><i className="fa fa-play fa-3x"/> Google Play</a>
        <a href="/"><i className="fa fa-windows fa-3x"/> windows</a>
      </div>
    </div>
  </section>
};

export default TopHero;
