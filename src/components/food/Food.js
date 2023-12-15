import food from './Food.svg'
import './style.scss'

const Food = () => {
  return (
    <div className="food">
      <img className="food__image" src={food} alt="food" />
    </div>
  );
}
 
export default Food;