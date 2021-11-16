function Login() {
    return (
        <>
            <div className="authorization">
                <h1 className="authorization__title">Log in</h1>
                <form action="POST" className="authorization__form">
                    <input placeholder="Email" className="authorization__input" type="email" name="email" minLength="2" maxLength="200" required/>
                    <input placeholder="Password" className="authorization__input" type="password" name="password" minLength="2" maxLength="200" required/>
                    <button type="submit" className="authorization__button authorization__button_log-in">Log in</button>
                </form>
                <p className="authorization__info">Not a member yet? <a href="d" className="authorization__link">Sign up here!</a></p>
            </div>
        </>
    )
}

export default Login;