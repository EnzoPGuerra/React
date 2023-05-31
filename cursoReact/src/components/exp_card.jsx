import './exp_lists.css'

function ExpCard({image, price, status, description, vote, isTrue, openSpots}) {

  return (
    <>
      <div className="exp_photo" style={{backgroundImage:`url(${image})`}}>
        <div>
          {openSpots > 0 ? <p>ONLINE</p>: <p>SOLDOUT</p>}
        </div>
      </div>
      <div className="place_vote">
        <span></span>
        <p className="vote">{vote} </p>
        <p className="place" style={{marginLeft:"0.2vw"}}> ({openSpots}) USA</p>
      </div>
      <p className="description">{description}</p>
      <span className="price_person">
        <p>From ${price}</p>
        <p> /person </p>
      </span>
      <p></p>
    </>
  );
}
export default ExpCard