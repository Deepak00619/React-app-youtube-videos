import React from 'react';
import SearchBar from './SearchBar';
import axios from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
    state={videos: [], selectedVideo: null}

    componentDidMount(){
        this.onFormSubmit('cartoons')
    }

    onFormSubmit= async (term) =>{
       // console.log(term)
       const response= await axios.get('/search',{
            params:{
                q: term
            }
        });
        //console.log(response);
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    }
    onVideoSelect= video =>{
        this.setState({selectedVideo: video})
    }

    render(){
        return(
            <div className="ui container">
            <SearchBar onFormSubmit={this.onFormSubmit} />
            <div className="ui grid">
            <div className="ui row">
            <div className="eleven wide column">
            <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
            </div>
            </div>
            </div>
        )
    }
}
export default App;