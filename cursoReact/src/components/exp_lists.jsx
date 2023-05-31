import './exp_lists.css'
import ExpCard from './exp_card';
import cardsData from './data';
function ExpList(){

  const cardsElements = cardsData.map((card) => (
    <li> <ExpCard
      key={card.id}
      {...card}
    /> </li>
  ));

  return (
    <ul className="exp-list">
      {cardsElements}
    </ul>
  );
}

export default ExpList