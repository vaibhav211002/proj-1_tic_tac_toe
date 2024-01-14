
import { useState } from "react"
export default function Player({initialname,symbol,isactive,onchangename}){
    

    const [playerName,setplayername] = useState(initialname)
    const [isediting , setediting]=useState(false)

    console.log(isediting);
    // console.log('setediting',setediting);
    function  editclick(){
      setediting((editing)=>!isediting)

      if (isediting) {
        onchangename(symbol,playerName)
        
      }

    }

    function handlechange(event){
      console.log(event);
      setplayername(event.target.value)

      
    }





    let playername = <span className="player-name">{playerName}</span>

    // let btncap = 'Edit'
    
    
    if (isediting === true) {
      playername=<input type="text" value={playerName} onChange={handlechange} required/>
      // btncap='Save'

      
    }
    
    return <li className={isactive ? 'active': undefined}>
      <span className="player">
          {playername}
          <span className="player-symbol">{symbol} </span>
          <button onClick={editclick}>{isediting ? 'Save' : 'Edit'}</button>
          </span>
        </li>
}