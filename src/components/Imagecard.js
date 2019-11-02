import React from 'react';
import './Imagelist.css'

class Imagecard extends React.Component {
    constructor(props) {
        super(props)

        this.imageref=React.createRef();
        this.state={span: 0}
        
    }
    setspans = () => {
        const height=  this.imageref.current.clientHeight;
        const spans = Math.ceil(height/10);


        this.setState({span: spans})

    }

    componentDidMount (){
        this.imageref.current.addEventListener('load',this.setspans)
    }
        
    
    render() {
        
        return (
            <div style={{gridRowEnd: ` span ${this.state.span}`}} className='image_container'>
                <img alt={this.props.image.description}  src={this.props.image.urls.regular} ref={this.imageref}/>
            </div>
            )
    }
}
export default Imagecard;