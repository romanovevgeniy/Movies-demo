import React from "react"

class Search extends React.Component {
    state = {
        search: '',
        type: 'all',
    }

    handleKey = (event) => {
        if (event.key === "Enter") {
            this.props.searchMovies(this.state.search, this.state.type)
        }
    }

    handleFilter = (event) => {
        this.setState(
            () => ({ type: event.target.dataset.type }),
            () => {
                this.props.searchMovies(this.state.search, this.state.type)
            }
        )
    }

    render() {
        return (
            <div className='row'>
                <div className='col s12'>
                    <div className='input-field'>
                        <input
                            className='validate'
                            placeholder='Поиск'
                            type='search'
                            value={this.state.search}
                            onChange={(e) => {
                                this.setState({ search: e.target.value })
                            }}
                            onKeyDown={this.handleKey}
                        />
                        <button
                            className='btn-small deep-purple lighten-3 search-btn'
                            onClick={() =>
                                this.props.searchMovies(
                                    this.state.search,
                                    this.state.type
                                )
                            }
                        >
                            Поиск
                        </button>
                    </div>
                    <div>
                        <label>
                            <input
                                className='with-gap'
                                name='type'
                                type='radio'
                                data-type='all'
                                onChange={this.handleFilter}
                                checked={this.type = "all"}
                            />
                            <span>Все</span>
                        </label>
                        <label>
                            <input
                                className='with-gap'
                                name='type'
                                type='radio'
                                data-type='movie'
                                onChange={this.handleFilter}
                                checked={this.type = "movie"}
                            />
                            <span>Фильмы</span>
                        </label>
                        <label>
                            <input
                                className='with-gap'
                                name='type'
                                type='radio'
                                data-type='series'
                                onChange={this.handleFilter}
                                checked={this.type = "series"}
                            />
                            <span>Сериалы</span>
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search
