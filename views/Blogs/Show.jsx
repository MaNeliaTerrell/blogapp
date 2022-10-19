const React = require('react');
const BlogSchema = require('../../models/BlogSchema');
const Blogs = require('./Blogs');

class Show extends React.Component {
    render() {
        const { blog } = this.props
        return (
            <body style={myStyle.body}>
                
                <h1>Blogs Show Page</h1>
                
            <div style={myStyle.font1}>
            
            <link rel="stylesheet" href="/CSS/app.css"/> 

                    <h3 style={myStyle.font2}>{blog.title}</h3>
                    <br/>
                    <img src={blog.image} style={myStyle.image}></img>
                    <br/>
                    <p>{blog.body}</p> 
                    <br/>
                    
                    <h3>{blog.author}</h3>

                Click to Like:<input type='checkbox' name='likes'/>
                <br/>
                <a href='/blog' style={myStyle.font2}>BACK to Blog List</a>
        
                <a href={'/'}style={myStyle.font2}>Back to Homepage</a>
                <br/>
            </div>
            </body>
        );
    }
}

const myStyle = {
    body: {
    backgroundImage: 'url(https://png.pngtree.com/thumb_back/fw800/back_our/20190628/ourmid/pngtree-fresh-light-green-plant-advertising-background-image_282287.jpg)' ,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    margin: '20px',
    padding: '10px',
    width: '100%',
    backgroundAttachment: 'fixed',
    alignItems: 'center',
    justifyContent: 'center',
    },
    font1:{
    color: '#0f281c',
    fontSize: '20px',
    textAlign: 'center',
    margin: '30px',
    fontFamily: 'Klee One, cursive',
    background: 'rgba(53, 26, 68, 0.1)',
    },
    font2:{
        color: '#61021f',
        fontSize: '30px',
        textAlign: 'center center',
        margin: '30px',
        fontFamily: 'Oregano, cursive',
    },
    image: {
        width: '300px',
        height: '200px',
        textAlign: 'center',
    }
}


module.exports = Show;