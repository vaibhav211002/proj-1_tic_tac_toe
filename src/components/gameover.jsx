export default function Gameover({winner , restart}){



    return <div id="game-over">
        <h2>Game Over !</h2>

         {winner && <p>{winner} Won !! </p>}
         {!winner && <p>It's a Draw ... </p>}

        <p>
            <button onClick={restart}>Rematch ? </button>
        </p>




    </div>
}