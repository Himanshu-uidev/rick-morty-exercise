import React from "react";
import "../../App.css";

function SearchBox(props) {
  //console.log("====>props", props);
  return (
    <>
      <form>
        <div className="form-group row" style={{ margin: "0px" }}>
          <div className="col-xs-4 searchBox">
            <label>Search by Name</label>
            <input
              className="form-control"
              id="inputdefault"
              type="text"
              placeholder="Type a name..."
              onChange={props.search}
            />
          </div>
        </div>
        <br />
        <div className="custom-select selectBox">
          <b>Sort by ID:  </b>
          <select value={props.value} onChange={props.sort}>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
        </div>
      </form>
    </>
  );
}

export default SearchBox;
