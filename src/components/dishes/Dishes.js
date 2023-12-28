import './style.scss';
import favorite from "./img/favorite.svg"

const Dishes = ({name, type, time, rating, price, img}) => {
  return (
    <div className="dish__card">
      <form className='favorite-button'>
        <input type='checkbox'/>
        <img className="favorite__image" src={favorite} alt="title"/>
      </form>
      <img className="dish__image" src={img} alt="title"/>
      <div className="dish-typeBlock" id='dish-typeBlock' style={type === "Healthy" ? {backgroundColor: "#F7EDD0"} : type === "Trending" ? {backgroundColor: "#F7C5BA"} : {backgroundColor: "#98FB98"}}>
        <p className="dish__type" id='dish__type' style={type === "Healthy" ? {color: "#DAA31A"} : type === "Trending" ? {color: "#FB471D"} : {color: "#309D5B"}}>{type}</p>
      </div>
      <article>
        <div className="dish-info">
          <h3 className="dish__name">{name}</h3>
          <div className="dish-criteria">
            <p className="dish__time">{time} &#8226;</p>
            <p className="dish__rating">{rating}</p>
          </div> 
          <div className="dish-buy">
            <p className="dish__price">${price}<span>.99</span></p>
            <button className="dish__button"></button>
          </div>
          
        </div>
      </article>
    </div>
  );
}
 
export default Dishes;