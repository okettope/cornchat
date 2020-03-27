import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import DevInfo from '../DevInfo/DevInfo'

import './Join.css'

const Join = () => {

    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return(
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Join</h1>
                <div><input placeholder="Username" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} required /></div>
                <div><input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} maxLength="20"   required/></div>
                <Link onClick={event => (!name || !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className="button "  type="submit">SIGN IN </button>
                </Link>

                <br/><br/>
                <DevInfo/>
            </div> 

        </div>
        
    );
}

export default Join;