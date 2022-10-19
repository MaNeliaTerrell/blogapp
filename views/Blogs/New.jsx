const React = require('react')


class New extends React.Component {
    render(){
        return(
            <body style={myStyles.body}>
            <div>
            <link rel="stylesheet" href="/CSS/app.css"/> 
                <h1 style={myStyles.font1}>Add New Blog</h1>

                <form action='/blog' method='POST' style={myStyles.font2}>
                    title: <input type='text' name='title' style={myStyles.inputBox} required/>
                    <br/>
                    body: 
                    <br/><textarea  name="body" placeholder="body" rows="20" cols="60" required />
                    <br/>
                    image url: <input type='url' name='image' style={myStyles.inputBox}></input>
                    <br/>
                    author: <input type='text' name='author'style={myStyles.inputBox} required/>
                    <br/>
                    
                    Create a New Blog: <input type='submit' value="Let's Go!"/>
                    <br/>
                    sponsored: <input type='checkbox'/>
                    <br/>
                    <br/>
                    <a href={'/'}>Back to Homepage</a>
                </form>
            </div>
            </body>
        )
    }
}

const myStyles = {
    inputBox: {
        height: '15px',
        width: '350px',
    },
    body: {
        backgroundImage: 'url(https://png.pngtree.com/thumb_back/fw800/back_our/20190628/ourmid/pngtree-fresh-light-green-plant-advertising-background-image_282287.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        margin: '-8px',
        padding: '10px',
        width: '100%',
        backgroundAttachment: 'fixed',
    },
    font1: {
        fontFamily: "Arthemis",
        color: '#7f3b0b',
        fontSize: '65px',
        textAlign: 'center',
        margin: '0em',
        padding: '10px',
        fontStretch: 'ultra-expanded',
        background: 'rgba(136, 163, 152, 0.486)',
    },
    font2:{
        color: '#0f281c',
        fontSize: '20px',
        textAlign: 'center',
        margin: '30px',
        fontFamily: 'Klee One, cursive',
        background: 'rgba(53, 26, 68, 0.1)',
        justifyContent: 'center',
        },
}

module.exports = New