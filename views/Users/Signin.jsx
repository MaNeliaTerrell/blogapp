const React = require('react')
const Navbar = require('../components/Navbar')

class Signin extends React.Component {
    render (){
        return (
            <div>
                <Navbar/>
                <h1>Sign in Page</h1>
                <form action='/user/signin' method="post" style={myStyles.form}>
          <fieldset>
            <legend>Log in to your account</legend>

            <label htmlFor="email">Email</label>
            <br />
            <input type="text" name="email" required/>
            <br />

            <label htmlFor="password">Password</label>
            <br />
            <input type="password" name="password" required/>
            <br />

            <input type="submit" value="Log in" style={myStyles.button}/>
          </fieldset>
          
        </form>
            </div>
        )
    }
}

const myStyles ={
  form: {
    alignItems: 'center',
    alignContent: 'center',
    display: 'flex',
    justifyContent: 'center',
    color: '#0f281c',
    fontSize: '20px',
    textAlign: 'center',
    marginLeft: '600px',
    marginRight: '600px',
    marginTop: '100px',
    fontFamily: 'Klee One, cursive',
    background: 'rgba(53, 26, 68, 0.1)',
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

module.exports = Signin