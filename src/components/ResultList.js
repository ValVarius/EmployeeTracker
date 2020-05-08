import React from "react";

function ResultList(props) {

    
    console.log("Current page is: " + JSON.stringify(props.currentPage));
    console.log(props.currentPage.result);
    
    if (props.currentPage === "Home"){
  
    return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Phone Number</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>

      {props.results.map(result => (
          
        <tr>
        <th scope="row">
            <a href="#single"    onClick={() => props.handlePageChange({result})}>
            <img src={result.picture.thumbnail} classNameName="img-responsive" alt= 'http://placekitten.com/200/300' />
            </a> 
            </th>
        <td>{result.name.first}</td>
        <td>{result.name.last}</td>
        <td>{result.cell}</td>
        <td>{result.email}</td>
        </tr>
        

      ))}
    
    </tbody>
      </table>
  )
      }

  else {
      return(
      <div>
          <div className="card mb-3" >
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src={props.currentPage.result.picture.large} className="card-img" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">FIRST NAME: {props.currentPage.result.name.first}</p>
        <p className="card-text">LAST NAME:{props.currentPage.result.name.last}</p>
        <p className="card-text">Date of Birth: {props.currentPage.result.dob.date}</p>
        <p className="card-text">Phone Number{props.currentPage.result.cell}</p>
        <p className="card-text">Email Address{props.currentPage.result.email}</p>
        <p className="card-text">Location: {props.currentPage.result.location.city}, {props.currentPage.result.location.country}</p>
        
      </div>
    </div>
  </div>
</div>
      </div>
      )
  }

}

export default ResultList;


