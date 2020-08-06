import React from 'react';
import { Link } from 'react-router-dom';

class NotFoundPage extends React.Component{
    render(){
        return <div style={{
            // display:'flex',
            alignItems: 'center',
            textAlign: 'center'
        }}>
            <img src="https://www.pngitem.com/pimgs/m/254-2549834_404-page-not-found-404-not-found-png.png" style={{
                maxWidth: '100vw',
                width: '100vw',
            }} />
            <p style={{textAlign:"center", width:'100vw'}}>
                <Link to="/">Go to Home </Link>
            </p>
        </div>;
    }
}
export default NotFoundPage;