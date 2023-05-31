
import './main_content.css'
import ExpList from './exp_lists'
function MainContent(){
  return(
    <div className='main-content'>

      <div className="central_photo">
      </div>
      <div className='caixa_chamada'>
        <h1>Online Experiences</h1>
        <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
      </div>
      <ExpList />
    </div>
  )
}

export default MainContent