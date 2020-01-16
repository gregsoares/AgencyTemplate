import React from 'react';

/* Usage:
* <TopHero
*   title ='string'
*   subtitle ='string'
*   imgPath ='string'
*   btnText ='string'
*   iconOne/Two/Three: text: 'string'
* */


const TopHero = props => {
  const imgEl = (<img src={props.imgPath} alt="Hero Imgs"/>)
  const btnEl = (<a href="get-started" className="btn-get-started scrollto">{props.btnText}</a>)
  const iconOneEl = (<a href="/"><i className="fa fa-apple fa-3x"/> {props.iconOne.text} </a>) 
  const iconTwoEl = (<a href="/"><i className="fa fa-play fa-3x"/> {props.iconTwo.text}</a>)
  const iconThreeEl = (<a href="/"><i className="fa fa-windows fa-3x"/> {props.iconThree.text}</a>)

  return (
    <section id="hero" className="wow fadeIn">
      <div className="hero-container">
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
        {props.imgPath ? imgEl : null}

        {props.btnText ? btnEl : null}
        <div className="btns">
        {props.iconOne ? iconOneEl : null}
        {props.iconTwo ? iconTwoEl : null}
        {props.iconThree ? iconThreeEl : null}
        </div>
      </div>
    </section>)
};

export default TopHero;
