import {useState} from "react"
import { Link } from "react-router-dom"
import pw from "../pw"

function Login({user, setUser}) {
    const [password, setPassword] = useState("")

    return <main>
        {user === "Ann" ? <section>
                <p>Logged in</p>
                <Link to="/admin">Admin</Link>
            </section> : null}
        <p>Password</p>
        <form onSubmit={(event) => {
            event.preventDefault();
            if(password === pw) {
                setUser("Ann")
            }
        }}>
            <input type="password" value={password} onChange={(event) => {
                setPassword(event.target.value)
                }}></input>
            <button disabled={password === ""} type="submit" className="login__button">Login</button>
        </form>
    </main>
}

export default Login;