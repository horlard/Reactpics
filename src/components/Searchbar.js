import React from 'react';

class Searchbar extends React.Component {
    oninputchange (event) {
        console.log(event.target.value);
    }

    state= {
        term:''
    }

    onFormsubmit= (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
        this.setState({term:''});
        
    }
    render () {
        return (
            <div className='ui segment'>
                <form className='ui form' onSubmit={this.onFormsubmit}>
                <div className='field'>
                <label>image search</label>
                <input type='text' onChange={(e) => this.setState({term:e.target.value})} value={this.state.term}/>
                
                </div>
                 </form>    
            </div>
        )
    }
}
export default Searchbar;