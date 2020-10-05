import React from 'react';
import ReactDOM from 'react-dom';

export default class IngredientSearch extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: false,
        drinks: null,
    }
  }
  
    async componentDidMount() {
      const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin";
      const response = await fetch(url);
      const content = await response.json();
      this.setState({
        drinks: content.drinks,
        loading: false,
      });
    }
    
  render() {

    const drinksByIngredientList = [];

    return (
        <div>
        <App cocktail={cocktail} />
    console



        </div>
    );
 }

}