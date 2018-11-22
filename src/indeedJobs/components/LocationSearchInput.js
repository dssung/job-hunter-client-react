import React from 'react';
import {hot} from 'react-hot-loader';
import {TextField} from '@material-ui/core';
import PlacesAutocomplete from 'react-places-autocomplete';

class LocationSearchInput extends React.Component{
  render(){
    return (
      <>
       <PlacesAutocomplete
          value = {this.props.value}
          onChange = {this.props.onChange}
          searchOptions = {{
            types: ['(cities)'],
            componentRestrictions: {country: 'us'}
          }}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <div>
              <TextField
                variant = 'outlined'
                className = 'search-field'
                type = 'search'
                label = 'City/State or Zip'
                margin = 'normal'
                {...getInputProps()}
              />

              <div className = "autocomplete-dropdown-container">
                {loading && <div>Loading...</div>}
                {suggestions.map(suggestion => {
                  const className = suggestion.active ? 'suggestion-item-active' : 'suggestion-item';
                  return (
                    <div {...getSuggestionItemProps(suggestion, {className})}>
                      <span onClick = {this.props.onchange}>
                        {suggestion.description}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      </>
  );
  }
}

export default hot(module)(LocationSearchInput);