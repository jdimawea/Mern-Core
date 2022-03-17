import React, { useState } from 'react'

const Form = () => {

    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)

    const [firstnameError, setFirstnameError] = useState(true)
    const [lastnameError, setLastnameError] = useState(true)
    const [emailError, setEmailError] = useState(true)
    const [passwordError, setPasswordError] = useState(true)
    const [confirmError, setConfirmError] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!firstnameError && !lastnameError && !emailError && !passwordError && !confirmError) {
            const newUser = { firstname, lastname, email, password, confirm }
            console.log(newUser)
            setHasBeenSubmitted(true)
        } else {
            alert("error")
        }
    }

    const handleFirstName = (e) => {
        setFirstname(e.target.value)
        if (e.target.value.length < 3 && e.target.value.length > 0) {
            setFirstnameError("First Name must be at least 3 characters")
        } else {
            setFirstnameError("")
        }
    }

    const handleLastName = (e) => {
        setLastname(e.target.value)
        if (e.target.value.length < 3 && e.target.value.length > 0) {
            setLastnameError("Last Name must be at least 3 characters")
        } else {
            setLastnameError("")
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
        if (e.target.value.length < 2 && e.target.value.length > 0) {
            setEmailError("Email must be at least 2 characters")
        } else {
            setEmailError("")
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters")
        } else {
            setPasswordError("")
        }
    }

    const handleConfirm = (e) => {
        setConfirm(e.target.value)
        if (e.target.value !== password) {
            setConfirmError("Passwords must match")
        } else {
            setConfirmError("")
        }
    }

    return (
        <div>
            <h1> MORE FORM</h1>
            <form onSubmit={handleSubmit}>
                <p><div>
                    <label> First Name : </label>
                    <input name="firstname" type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} />
                    {
                        firstname.length < 2 && firstname.length > 0 ?
                            <p> First Name must be at least 2 characters</p> :
                            ""
                    }
                </div></p>
                <p><div>
                    <label> Last Name: </label>
                    <input name="lastname" type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} />
                    {
                        lastname.length < 2 && lastname.length > 0 ?
                            <p> Last Name must be at least 2 characters</p> :
                            ""
                    }
                </div></p>
                <p><div>
                    <label> Email : </label>
                    <input name="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    {
                        email.length < 2 && email.length > 0 ?
                            <p> Email must be at least 2 characters</p> :
                            ""
                    }
                </div></p>
                <p><div>
                    <label> Password : </label>
                    <input name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    {
                        password.length < 8 && password.length > 0 ?
                            <p> Password must be at least 8 characters</p> :
                            ""
                    }
                </div></p>
                <p><div>
                    <label> Confirm Password : </label>
                    <input name="confirm" type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} />
                    {
                        password !== confirm && confirm.length > 0 ?
                            <p> Password must match</p> :
                            ""
                    }
                </div></p>
            </form>
        </div>
    )
}

export default Form
