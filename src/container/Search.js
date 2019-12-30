import React, { Component } from "react";
import ApiResults from "../components/api-results/ApiResults";
import SearchBox from "../components/searchBox/SearchBox";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchtext: "",
      apiUrl: "https://rickandmortyapi.com/api/character/",
      images: [],
      isDataLoading: false,
      error: null,
      name: "",
      value: "Ascending"
    };
  }

  componentDidMount() {
    this.setState({ isDataLoading: true });
    fetch(this.state.apiUrl)
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error("Error Loading data...");
        }
      })
      .then(data => {
        this.setState({ images: data.results, isDataLoading: false });
      })
      .catch(error => {
        this.setState({ error: error });
      });
  }

  searchHandler = event => {
    this.setState({ name: event.target.value });
  };

  sortHandler = event => {
    this.setState({ value: event.target.value });
    //console.log("====>>", this.state.value);
    if (this.state.value !== "Descending") {
      this.setState({ images: this.state.images.reverse() });
    }
  };
  searchingFor = arg => {
    return function(val) {
      //   console.log("=====>>searchingfor",val.name.toLowerCase().includes(arg.toLowerCase()) || !arg)
      return val.name.toLowerCase().includes(arg.toLowerCase()) || !arg;
    };
  };

  render() {
    const { error, isDataLoading, images } = this.state;
    if (error) {
      return <h3 style={{ color: "red" }}>{error.message}</h3>;
    }
    if (isDataLoading) {
      return <h3>Loading ...</h3>;
    }

    return (
      <>
        <SearchBox
          search={this.searchHandler}
          value={this.state.value}
          sort={this.sortHandler}
        />
        <br />
        <ApiResults
          name={this.state.name}
          searchingFor={this.searchingFor}
          images={images}
          value={this.state.value}
        />
      </>
    );
  }
}

export default Search;
