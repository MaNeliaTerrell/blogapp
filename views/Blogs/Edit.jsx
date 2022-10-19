const React = require('react')
const Navbar = require('../components/Navbar')

class Edit extends React.Component {
    render() {

        const { blogs } = this.props
        return (
            <div>
                <link rel="stylesheet" href="/CSS/app.css" />
                <Navbar />
                <h1>Edit Blog Page</h1>

                <div style={myStyles.font2}>

                    <form action={`/blog/${blogs._id}?_method=PUT`} method="POST" >

                        title: <input type="text" name='title' defaultValue={blogs.title} style={myStyles.inputBox} />
                        <br />
                        image url: <input type='url' name='image' style={myStyles.inputBox}></input>
                        <br />
                        body: <textarea type='text' name='body' defaultValue={blogs.body} rows="20" cols="60" />
                        <br />

                        author: <input type='text' name='author' defaultValue={blogs.author} style={myStyles.inputBox} />
                        <br />

                        sponsored: {blogs.sponsored ? <input type='checkbox' name='sponsored' defaultChecked /> :

                            <input type='checkbox' name='sponsored' />}
                        <br />

                        <input type="submit" value='Update Blog' style={myStyles.font3} />
                    </form>
                </div>
                <form action={`/blog/${blogs._id}?_method=delete`} method='post' style={myStyles.font2}>
                    <input type='submit' value='Delete Blog' style={myStyles.font3} />
                </form>

            </div>

        )
    }
}

const myStyles = {
    inputBox: {
        height: '15px',
        width: '350px',
        alignItem: 'center',
        textAlign: 'left',
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
    font2: {
        color: '#0f281c',
        fontSize: '20px',
        textAlign: 'center',
        padding: '20px',
        fontFamily: 'Klee One, cursive',
        background: 'rgba(53, 26, 68, 0.1)',
        justifyContent: 'center',
    },
    font3: {
        fontFamily: 'Klee One, cursive',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        color: 'rgb(21, 64, 70)',
        fontSize: '25px',
        textAlign: 'center'
    }
}

module.exports = Edit