import PropTypes from "prop-types";
import React from "react";
import "../../App.css";

const ApiResults = props => {
  //console.log(props);
  const { images } = props;
  //console.log(images);
  let data = images.filter(props.searchingFor(props.name));

  return (
    <>
      <div className="container-fluid">
        <div className="col column">
          {data.map((index, array, d) => (
            <div className="col-3 bg-success columnBgSuccess" key={index.id}>
              <img src={index.image} alt="" />
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>
                      <h4>Name: {index.name}</h4> <br />
                      Id -{index.id} - created 2 years ago
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      Status -<span>{index.status}</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Species -<span>{index.species}</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Gender -<span>{index.gender}</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Origin -<span>{index.origin.name}</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Location -<span>{index.location.name}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

ApiResults.propTypes = {
  images: PropTypes.array.isRequired
};

export default ApiResults;
