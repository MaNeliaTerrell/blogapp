const { urlencoded } = require('express')
const React = require('react')
const Edit = require('../Blogs/Edit')
const Navbar = require('../components/Navbar')

class Blogs extends React.Component {
    render() {

        const { blogs, loggedInUser } = this.props

        return (

            <body style={myStyle.body}>
                <div>

                <link rel="stylesheet" href="/CSS/app.css"/> 
                    
                    <h2 style={myStyle.font1}>Blogs</h2>
                    <h2 style={myStyle.hello}>Hello, {loggedInUser} ! </h2>
                    <br/>
                <Navbar/>

                    <section style={myStyle.container}>{blogs.map((blog) => (

                        <div key={blog._id} style={myStyle.wrapper}>
                            <a href={`blog/${blog._id}`} style={myStyle.font2}>{blog.title}</a>
                            <br />

                            {/* <p style={myStyle.font3}>{blog.body}</p> */}
                            <h4 style={myStyle.font4}>By: {blog.author}</h4>

                            <form action={`/blog/${blog._id}?_method=DELETE`} method='POST' style={myStyle.form}>
                                <button type='submit' value='Delete' style={myStyle.editFont}>Delete</button>
                            </form>
                            <br/>
                            <a href={`/blog/${blog._id}/edit`}>
                                <button style={myStyle.editFont}>Edit</button></a>
                            <br />

                            <a href={'/'} style={myStyle.font5}>Back to Homepage</a>
                            <br />
                            <br />

                            {blog.author === loggedInUser ? (
                                <div  >
                                    <a href={`/blog/${blog._id}/edit`}  >Edit</a>
                                </div>
                            ) : null}

                        </div>
                    ))}
                    </section>

                </div>
            </body>
        )
    }
}
const myStyle = {
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
    mainBlog: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',

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
        color: '#61021f',
        fontSize: '25px',
        textAlign: 'center center',
        margin: '30px',
        fontFamily: 'Montserrat, sansSerif',
        textDecoration: 'none',
    },
    font3: {
        color: 'gold',
        fontSize: '20px',
        textAlign: 'center center',
        margin: '30px',
        fontFamily: 'Tahoma',
    },
    font4: {
        color: '#774215',
        fontSize: '15px',
        textAlign: 'center',
        margin: '30px',
        fontFamily: 'Montserrat, sansSerif',
    },
    font5: {
        color: '#194d33',
        fontSize: '15px',
        margin: '30px',
        fontFamily: 'Montserrat, sansSerif',
    },
    wrapper: {
            padding: "5px",
            margin: "30px",
            width: "300px",
            height: "350px",
            border: "solid",
            borderWidth: "1px",
            borderColor: "black",
            alignItems: 'center',
            alignContent: 'center',
            background: 'rgba(60, 30, 30, 0.05)',
    },
    container: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        marginLeft: '50px',
      },
    editFont: {
        color: 'rgb(6, 73, 36)',
        fontWeight: 'bold',
        padding: '3px',
        fontSize: '12px',
        textAlign: 'center',
        alignItems: 'center',
      },
      hello: {
        color: "#395766",
        alignItems: "center",
        textAlign: "center",
        fontFamily: 'Comforter Brush, cursive',
        fontSize: "40px",
      },
      form: {
        alignItems: 'center',
        alignContent: 'center',
        display: 'flex',
        justifyContent: 'center',
      }
}

module.exports = Blogs