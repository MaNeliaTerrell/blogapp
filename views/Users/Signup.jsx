const React = require('react')
const Navbar = require('../components/Navbar')

class Signup extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <h1>Create a New Account</h1>
                <form action='/user/signup' method='post' style={myStyles.form}>
                    <fieldset>
                        <legend>Create an Account</legend>
                        <label htmlFor="username">Username</label>
                        <br />
                        <input type="text" name="username" required />
                        <br />
                        <label htmlFor="email">EMail</label>
                        <br />
                        <input type="text" name="email" required />
                        <br />
                        <label htmlFor="password">Password</label>
                        <br />
                        <input type="text" name="password" required />
                        <br />
                        <input type="submit" value="CREATE" style={myStyles.button}/>
                    </fieldset>
                </form>
                <div>
                    <p style={myStyles.font1}>
                        Already have an Account?
                        <a href="/user/signin" style={myStyles.font2}>Log in</a>{" "}
                    </p>
                </div>
            </div>
        )
    }
}

const myStyles = {
    form: {
        alignItems: 'center',
        alignContent: 'center',
        display: 'flex',
        justifyContent: 'center',
        color: '#0f281c',
        fontSize: '20px',
        textAlign: 'center',
        fontFamily: 'Klee One, cursive',
        background: 'rgba(53, 26, 68, 0.1)',
        marginLeft: '600px',
        marginRight: '600px',
        marginTop: '100px',
    },
    font1: {
        fontFamily: 'Klee One, cursive',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        color: '#0f281c',
        fontSize: '20px',
        textAlign: 'center',
    },
    font2: {
        fontFamily: 'Klee One, cursive',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        color: '#61021f',
        fontSize: '25px',
        textAlign: 'center'
    },
    button: {
        color: 'rgb(6, 73, 36)',
        fontWeight: 'bold',
        padding: '3px',
        fontSize: '12px',
        textAlign: 'center',
        alignItems: 'center',

    },
}
module.exports = Signup