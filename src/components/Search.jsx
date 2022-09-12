import React from "react";

class Search extends React.Component {
  state = {
    search: "",
  };

  handleKey = (event) => {
    if (event.key === "Enter") {
      this.props.searchMovies(this.state.search);
    }
  };

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="input-field">
            <input
              className="validate"
              placeholder="Поиск"
              type="search"
              value={this.state.search}
              onChange={(e) => {
                this.setState({ search: e.target.value });
              }}
              onKeyDown={this.handleKey}
            />
            <button
              className="btn-small deep-purple lighten-3 search-btn"
              onClick={() => this.props.searchMovies(this.state.search)}
            >
              Поиск
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
