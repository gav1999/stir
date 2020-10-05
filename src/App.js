import React from 'react';
import Stylesheet from './Stylesheet';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Button, Container} from 'react-bootstrap';
import MakeDrink from './cocktail/MakeDrink.js';
import ListNew from './cocktail/ListNew.js';


export default class CocktailList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      URL: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=', 
      loading: false,
      drinks: null, 
      searchValue: 'Gin',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
}

  async handleChange(event) {
    await this.setState({searchValue: event.target.value});
    await this.setState({url: this.state.url + this.state.searchValue});
    console.log(this.state.searchValue);

    this.getCocktailsByIngredient();
  }

  handleSubmit(event) {
    alert('An ingredient was submitted: ' + this.state.searchValue);
    event.preventDefault();
  }
  
  async getCocktailsByIngredient(){
    try{
      var content = {drinks: null};
      const response = await fetch(this.state.URL + this.state.searchValue);
      content = await response.json();
    }catch(e){
      console.log(e);
      return;
    }

    this.setState({
      drinks: content.drinks,
      loading: false,
    });
  }

  componentDidMount() {
   this.getCocktailsByIngredient();
  }

SearchName() {

}

render() {

const cocktailDivsList = []; // pass as props to MakeDrink compononent or copy over
    
    if(this.state.drinks) {
      this.state.drinks.forEach(cocktail => { 
       const ingredientDivsList = [];
       for(var i = 1; i < 16; i++) {
          var ingredientID = "strIngredient" + i;
       if(cocktail[ingredientID] && cocktail[ingredientID] != null) {
        
        ingredientDivsList.push(
          <div>
            {cocktail[ingredientID]}
          </div>
        );
        }
       }
      

      cocktailDivsList.push( // push the respective "strDrink" (the cocktail's name) from each of the newly created "cocktail" objects to an array named "cocktailDivsList"
    
    <div> 
      <Container>

        <div class="row">
    <Card style={{ width: '400px' }}>
    <div id="cardtainer">
  
      <Card.Img variant="top" src={cocktail.strDrinkThumb} />
      
      <Card.Body>
        <Card.Title><h3>The {cocktail.strDrink}</h3></Card.Title>
        <Card.Text>
        {ingredientDivsList}
        </Card.Text>
        <Button onClick={MakeDrink}>Make</Button> 
      </Card.Body>

      <div>
                
    </div> 
    </div>
    </Card> 
    </div>
   
    </Container>
    
  
<br/>
   </div>     
          );
      });
    }
    
    

    return (

      <div className="primary">
  
      <div>
      <h1>Cocktails</h1>
        <Stylesheet/>
        <div>
        <div>
          <Card/>
        </div>
        
             {this.state.loading || !this.state.drinks ? (
                <div>loading...</div> 
                ) : ( 
                <div>    
                  
                  <div id="search" >
                    <form onSubmit={this.handleSubmit}>
                      <label>
                                       
                        <input placeholder="Add Liquor" type="text" value={this.state.searchValue} onChange={this.handleChange} name="ingredient" /> 
                      </label>
                      <input type="submit" class="btn btn-success" value="Submit" />
                    </form>
                  </div>

                  {cocktailDivsList}
                </div>
                )
              }
             </div>
        </div>
      </div>
    )
  }

 }


