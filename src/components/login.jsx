import "./login.css";
import { useState, useRef } from 'react';
import { Cancel, Room } from '@material-ui/icons';
import axios from "axios";

export default function Login({setShowLogin, myStorage, setCurrentUser}){
    const [error, setError] = useState(false)
    const nameRef = useRef()
    const passwordRef = useRef()

    const hendelSubmit = async (e) => {
        e.preventDefault();
        const User = {
            username: nameRef.current.value,
            password: passwordRef.current.value,
        }

        try{
            const res = await axios.post("http://localhost:5000/api/users/login", User);
            myStorage.setItem("user",res.data.username);
            setCurrentUser(res.data.username);
            setShowLogin(false)
            setError(false);
        }catch(err){
            setError(true);
        }
    }

    return (
        <div className="loginContainer">
            <div className="logo">
                <Room />
                DnMappin
            </div>
            <form onSubmit={hendelSubmit}>
                <input type="text" placeholder="username" ref={nameRef}/>
                <input type="password" placeholder="password" ref={passwordRef}/>
                <button className="loginBtn">Login</button>
                {error && <span className="failure">Something went wrong!</span>}
            </form>
            <Cancel className="loginCancel" onClick={() => setShowLogin(false)}/>
        </div>
    )
}