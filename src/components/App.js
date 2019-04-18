import React from 'react';
import unsplash from '../api/unsplash';
import Searchbar from './Searchbar';
import Imagelist from '../components/Imagelist';


class App extends React.Component {
    state = {
        images:[]
    }
    onSearchsubmit= async (term) => {
      const response= await unsplash.get('https://api.unsplash.com/search/photos',{
            params: {
                query: term,
                per_page : 20
            }
        })
        this.setState({images:response.data.results});





    }

    render () {
        return (
            <div className='ui container' style={{marginTop:'20px'}}>
                <Searchbar onSubmit={this.onSearchsubmit}/>
                <Imagelist images={this.state.images}/>
                
            </div>
            )
    }
}

export default App;
