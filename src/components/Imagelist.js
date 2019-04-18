import './Imagelist.css';
import Imagecard from './Imagecard';
import React from 'react';



const Imagelist = (props) => {
    const images=props.images.map((image) => {
        return <Imagecard key={image.id} image={image}/>
    })
    return <div className='image-list'>{images}</div>
    
    
}
export default Imagelist;