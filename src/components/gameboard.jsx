import { useState } from "react"


export default function Gameboard({onselectsquare,board}) {




    // const [gameboard,setgameboard] = useState(initialgame)


    // function handlesquare(rowindex,colindex){
    //     // console.log(event);
    //     setgameboard((prevgameboard)=>{

    //         const updatedboard = [...prevgameboard.map(innerarray => [...innerarray])]
    //         updatedboard[rowindex][colindex]=activeplayersymbol;
    //         return updatedboard



    //     })

    //     onselectsquare();
    // }



    return <ol id="game-board">
        {board.map((row, rowindex) => (<li key={rowindex}>
            <ol>
                {row.map((playersymbol,colindex) => (
                <li key={colindex}>
                    <button onClick={()=>onselectsquare(rowindex,colindex)} disabled={playersymbol!== null} >{playersymbol}  </button>
                    
                </li>
                    ))}
            </ol>
        </li>))}

    </ol>

}