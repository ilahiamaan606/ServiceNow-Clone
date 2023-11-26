import {useState} from "react"

export default function Player({name,symbol}){

    const [isEditing, setisEditing] = useState(false)

    function handleClick(){
        setisEditing(true)
    }

    return (
        <li>
            <span className="player">
              {isEditing? <input></input> :  <span className="player-name">{name}</span>}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick}>{isEditing? "Save" : "Edit"}</button>
          </li>
    )
}