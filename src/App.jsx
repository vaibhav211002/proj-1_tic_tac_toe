

import Player from './components/playerinfo.jsx'
import Gameboard from './components/gameboard.jsx'
import { useState } from 'react'
import Log from './components/log.jsx'
import { WINNING_COMBINATIONS } from './combinations.js'
import Gameover from './components/gameover.jsx'
import '../src/app.css'

const initialgame = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

function App() {

  const [player , setwinner] =useState({
    'X':'Player 1',
    'O':'Player 2'
  })

  const [gameturns,setgameturns]=useState([])

  // const [haswinner ,sethaswinner] =useState(false);

  let gameboard = [...initialgame.map(array =>[...array])];
  for(const turn of gameturns ){

      const {square,player } = turn ;
      const {row ,col } = square;
      gameboard[row][col]=player
  }


  


  console.log(gameturns);

  const [activeplayer,setactiveplayer] = useState('X')

  let winner ;


  for(const combination of WINNING_COMBINATIONS) {
    
    const firstsquare = gameboard[combination[0].row][combination[0].column]
    const secondsquare =  gameboard[combination[1].row][combination[1].column]
    const thirdsquare = gameboard[combination[2].row][combination[2].column]


    console.log(firstsquare);
    // console.log(secondsquare);
    // console.log(thirdsquare);


    if(firstsquare && firstsquare === secondsquare && firstsquare === thirdsquare){

      winner=player[firstsquare];

    }
    
  }

  const hasdraws = gameturns.length === 9  && !winner ;
  console.log("draws",hasdraws);


  function rematch(){
    setgameturns([]);

  }

  function setwinnername(symbol , newname){
    setwinner(prevplayers =>{
      return {
        ...prevplayers,
        [symbol] : newname
      };

    })
    
  }












  function handlesquare(rowindex,colindex){
    setactiveplayer((curactiveplayer)=>{ return curactiveplayer==='X'? 'O':'X'})

    setgameturns(prevturns => {
      let currentplayer = 'X'

      if(prevturns.length>0 && prevturns[0].player === 'X'){
        currentplayer ='O'
      }
     const updatedturns =[{square : {row:rowindex , col:colindex},player:currentplayer},...prevturns]
     return updatedturns ;


    })
  }



  return (<main>

    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player initialname="Player 1 " symbol="X" isactive={activeplayer === 'X'}  onchangename = {setwinnername}   />
        <Player initialname="Player 2 " symbol="O" isactive={activeplayer === 'O'}  onchangename = {setwinnername}/>
      </ol>
      { (winner || hasdraws) && <Gameover winner={winner} restart = {rematch}/>}
      <Gameboard onselectsquare={handlesquare} board={gameboard}/>
      

    </div>
    <Log turns={gameturns}/>
    <h4 className='text'> This Application is Made by Vaibhav Bhatt . For suggestion Mail Here vaibhavbhatt9666@gmail.com</h4>


  </main>

  )
}

export default App
