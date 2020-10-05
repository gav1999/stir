import React from 'react';
//import PropTypes from 'prop-types';

export default class MakeDrink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        URL: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=',
        searchValue: 'Gin',
       drinks: null
    };
  }
  render() {
      return(
    <div id="search" >
    <form onSubmit={this.handleSubmit}> {/* refer to a handleSubmit function which open API URL "search by drink name"(https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita)*/}
      <label>
                       
        <input placeholder="Add Liquor" type="text" value={this.state.searchValue} onChange={this.handleChange} name="ingredient" /> 
      </label>
      <input type="submit" value="Submit" />
    </form>
  </div>
      )
  }
}
/*MakeDrink.propTypes = {
    birds: PropTypes.array.isRequired
  }*/

