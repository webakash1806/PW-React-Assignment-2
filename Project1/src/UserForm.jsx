import { useState } from "react"

const UserForm = () => {
    const [login, setLogin] = useState(false)

    const loginCheck = () => {
        setLogin(!login)
    }

    return (
        <>
            <div className="container">
                <h1>Instagram</h1>
                <input type="text" placeholder="Mobile No. or Email" />
                <input type="text" name="" id="" placeholder="Full Name" hidden={login} />
                <input type="password" name="" id="" placeholder="Password" />
                <input type="password" name="" id="" placeholder="Confirm-Password" hidden={login} />
                <button>{login ? "login" : "Sign up"}</button>
                <p>{login ? "Don't have an account?" : "Already have an account?"} <span onClick={loginCheck}>{login ? "Sign up" : "Login"}</span></p>
            </div>
        </>
    )
}

export default UserForm