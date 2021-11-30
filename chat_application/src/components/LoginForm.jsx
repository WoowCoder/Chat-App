import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError]       = useState("");

    const handleSumbit = async (e) => {
        e.preventDefault();

        const authObject = { "Project-ID": "9d162745-e07c-4e9e-91e3-dd5e76791699", "User-Name": username, "User-Secret": password}

        try {
            // username / password => chatengine --> give messages
            await axios.get("https://api.chatengine.io/chats", { headers: authObject });

            localStorage.setItem("username", username);
            localStorage.setItem("password", password);

            window.location.reload();
        } catch (error) {
            // error --> try with new username ...
        }
    }

    return (
        <div className = "wrapper">

            <div className = "form">
                <h1 className = "title"> Chat Application </h1>
                <form oneSumbit = { handleSumbit }>

                    <input type  ="text"     value = {username} oneChange = {(e) => setUsername(e.target.value)} className = "input" placeholder = "Username" required />
                    <input type  ="password" value = {password} oneChange = {(e) => setPassword(e.target.value)} className = "input" placeholder = "Password" required />

                    <div   align = "center">
                        <button type = "submit" className = "button">
                            <span> Start Chating </span>
                        </button>
                    </div>

                </form>
            </div>

        </div>
    );
}

export default LoginForm;
 