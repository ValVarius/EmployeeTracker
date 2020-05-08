import React, { Component } from "react";
import API from "../utils/API";
import ResultList from "./ResultList";
import Navbar from "./Navbar";

class Container extends Component {
  state = {
    result: [],
    search: "",
    currentPage: ""
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.searchEmployee();
  }

  searchEmployee = () => {
    API.search()
      .then(res => {
        this.setState({ result: res.data.results })
        console.log(this.state.result);
        
      })
      .catch(err => console.log(err))
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleInputChange = event => {
    console.log(event.target.value);
    
    this.handlePageChange(event.target.value)
    // // Updating the input's state
    
    // const value = event.target.value;
    // const name = event.target.name;
    // this.setState({
    //   [name]: value
    // });
  };


  render() {

    if (this.state.result){
    return (
      
      <div className="container-sm">
        <Navbar 
        handlePageChange={this.handlePageChange}
        currentPage={this.state.currentPage}
        handleInputChange ={this.handleInputChange}
        />
        <ResultList 
        results={this.state.result} 
        handlePageChange={this.handlePageChange}
        currentPage={this.state.currentPage}
        />
      </div>
      
      




     
       
      
    )}
    else{
      return <div>no results</div>
    };


  }
}

export default Container;




    
    