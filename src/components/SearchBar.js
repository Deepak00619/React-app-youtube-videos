import React from 'react';

class SearchBar extends React.Component{
    state= {term:''};

    // //this event for generate searching text
    // onInputCHange = (event)=>{
    //     this.setState=({term: event.target.value})
    //    // console.log(event.target.value)
    // }
    onFormSubmit= (event) =>{
        event.preventDefault();
        //TODO: Make sure we call 
        // callback from parent.
        this.props.onFormSubmit(this.state.term)
    }
    render(){
        return(
            <div className="search-bar ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
            <div className="field">
            <label text-color="green">Video Search</label>
            <input type="text"
             onChange={e =>{this.setState({term: e.target.value})}}
             value={this.state.terms}
            />
            </div>
            </form>
            </div>
        )
    }
}
export default SearchBar;