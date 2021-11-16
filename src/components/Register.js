function Register() {
    return (
        <>
            <div className="authorization">
                <h1 className="authorization__title">Register</h1>
                <form action="POST">
                    <input className="authorization__input" type="email" name="email" minLength="2" maxLength="200" required/>
                    <input className="authorization__input" type="password" name="password" minLength="2" maxLength="200" required/>
                    <button type="submit" className="authorization__button">Sign UP</button>
                </form>
                <p className="authorization__info">Already a member? <a href="ww" className="authorization__link">Log in here!</a></p>
            </div>
        </>
    )
}

export default Register;