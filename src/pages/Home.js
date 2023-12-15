import trustpilot from "../img/trustpilot.svg"
import star from "../img/star.svg"
import Food from "../components/food/Food";

function Stars() {
  const elements = [];

  for (let i = 0; i < 5; i++) {
    elements.push(<img className="rating__star" key={i} src={star} alt="star"/>);
  }

  return elements;
}

const Home = () => {
  return (
    <main className="main">
      <div className="container">
        <section className="banner">
          <div className="banner-info">
            <p className="banner__subtitle">OVER 1000 USERS</p>
            <h1 className="banner__title">Enjoy Foods All Over The <span>World</span></h1>
            <p className="banner__text">EatLy help you set saving goals, earn cash back offers, Go to disclaimer for 
            more details and get paychecks up to two days early. <span>Get a $20 bonus.</span></p>
            <div className="banner-buttons">
              <button className="banner__button start">Get Started</button>
              <button className="banner__button pro">Go Pro</button>
            </div>
            <div className="banner-rating">
              <img className="rating__trustpilot" src={trustpilot} alt="trustpilot"/>
              <div>
                <Stars />
              </div>
              <p className="rating__score">4900+</p>
            </div>
          </div>
          <Food />
        </section>
      </div>
    </main>
  );
}
 
export default Home;