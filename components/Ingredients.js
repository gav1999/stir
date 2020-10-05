
//stuff that is maybe almost there


export default class CocktailList extends React.Component {
  state = {
    loading: false,
    cocktails: null,
    ingredients: null,
  }

 async componentDidMount() {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";
    const response = await fetch(url);
    const content = await response.json();
    this.setState({
      cocktails: content.drinks,
      loading: false,
      ingredients: content.drinks.strIngredients1,
    });
  }

render() {


if(this.state.ingredients){
  this.state.ingredients.forEach(ingredient => {
    ingredientsDivsList.push( 
    <div><h6>{ingredient.strIngredient1}</h6>
    
   
    </div>
      );
  });

} 

const ingredientsDivsList = [];

return (
      
      <div>
        <h1>List of Sick-Ass Cocktails</h1>
             {this.state.loading || !this.state.cocktails + !this.state.ingredients ? (
                <div>loading...</div> 
                ) : ( 
                <div>
                  {cocktailDivsList}
                
                <div>
                  {ingredientsDivsList}
                  </div></div>
                )
              }
             
      </div>
    )
  }

}

