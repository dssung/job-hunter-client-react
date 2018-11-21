import React from 'react';
import {hot} from 'react-hot-loader';
import {TextField, InputAdornment, MenuItem, IconButton} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import LocationSearchInput from './LocationSearchInput';

class JobSearchBar extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      searchField: Object.assign({}, this.props.searchField)
    }
  }

  handleChange(name){
    let newValue = event.target.value;

    if (name === 'l')
      newValue = event.target.value || event.target.innerText
    
		if (name === 'radius' || name === 'fromage' || name === 'sort')
      newValue = event.target.dataset.value;

		let updateSearchField = this.state.searchField;
    updateSearchField[name] = newValue;

    this.setState({ searchField: updateSearchField });
    this.props.handleSearch(this.state.searchField)
	}

  render(){
    let {q, l, radius, sort, fromage} = this.state.searchField;

    return (
      <>
        <TextField
          variant = 'outlined'
          label = 'Search Jobs'
          type = 'search'
          margin = 'normal'
          className = 'search-field'
          value = {q}
          onKeyPress = {(e) => {(e.key === 'Enter') ? this.props.handleSearch(this.state.searchField) : {}}}
          onChange = {this.handleChange.bind(this, 'q')}
          InputProps= {{
            endAdornment: (
              <InputAdornment variant = 'filled' position = 'end'>
                <IconButton>
                  <SearchIcon
                    onClick = {() => {this.props.handleSearch(this.state.searchField)}}/>
                </IconButton>
              </InputAdornment>
            )
          }}
        />

        <TextField
          select
          variant = 'outlined'
          label = 'Date Posted'
          margin = 'normal'
          className = 'search-field'
          value = {fromage}
          onChange = {this.handleChange.bind(this, 'fromage')}
        >
          <MenuItem value = {'ALL'}>All</MenuItem>
          <MenuItem value = {1}>Past day</MenuItem>
          <MenuItem value = {3}>Past 3 days</MenuItem>
          <MenuItem value = {7}>Past week</MenuItem>
          <MenuItem value = {30}>Past Month</MenuItem>
        </TextField>

        <LocationSearchInput
          value = {l}
          onChange = {this.handleChange.bind(this, 'l')}
        />

        <TextField
          select
          variant = 'outlined'
          label = 'Range'
          margin = 'normal'
          className = 'search-field'
          value = {radius}
          onChange = {this.handleChange.bind(this, 'radius')}
        >
          <MenuItem value = {2}>2 mi</MenuItem>
          <MenuItem value = {5}>5 mi</MenuItem>
          <MenuItem value = {15}>15 mi</MenuItem>
          <MenuItem value = {30}>30 mi</MenuItem>
          <MenuItem value = {60}>60 mi</MenuItem>
          <MenuItem value = {200}>200 mi</MenuItem>
        </TextField>

        <TextField
          select
          variant = 'outlined'
          label = 'Sort By'
          className = 'search-field'
          margin = 'normal'
          value = {sort}
          onChange = {this.handleChange.bind(this, 'sort')}
        >
          <MenuItem value = {'relevance'}>Relevance</MenuItem>
          <MenuItem value = {'date'}>Date</MenuItem>
        </TextField>
      </>
    );
  }
}

export default hot(module)(JobSearchBar);