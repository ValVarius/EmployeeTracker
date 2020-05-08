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
    this.handlePageChange(event.target.value)
    
  };

  sortByName = () => {
    var alphabetical = this.state.result.sort(compare);

    function compare(a, b) {

      const nameA = a.name.first.toUpperCase();
      const nameB = b.name.first.toUpperCase();
    
      let comparison = 0;
      if (nameA > nameB) {
        comparison = 1;
      } else if (nameA < nameB) {
        comparison = -1;
      }
      return comparison;
    }
    
    
    this.setState({ result: alphabetical });
  }

  sortByLast = () => {
    var alphabetical = this.state.result.sort(compare);

    function compare(a, b) {

      const nameA = a.name.last.toUpperCase();
      const nameB = b.name.last.toUpperCase();
    
      let comparison = 0;
      if (nameA > nameB) {
        comparison = 1;
      } else if (nameA < nameB) {
        comparison = -1;
      }
      return comparison;
    }
    
    
    this.setState({ result: alphabetical });
  }


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
        sortByName = {this.sortByName}
        sortByLast = {this.sortByLast}
        />
      </div>
      
      




     
       
      
    )}
    else{
      return <div>no results</div>
    };


  }
}

export default Container;




    
    