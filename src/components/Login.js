function Login() {
    return (
        <>
            <div className="authorization">
                <h1 className="authorization__title">Login</h1>
                <form action="POST">
                    <input className="authorization__input" type="email" name="email" minLength="2" maxLength="200" required/>
                    <input className="authorization__input" type="password" name="password" minLength="2" maxLength="200" required/>
                    <button type="submit" className="authorization__button">Log In</button>
                </form>
                <p className="authorization__info">Not a member yet? <a href="d" className="authorization">Sign up here!</a></p>
            </div>
        </>
    )
}

export default Login;