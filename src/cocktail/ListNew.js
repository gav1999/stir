/*import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Container} from 'react-bootstrap';
import Stylesheet from '../Stylesheet.js';

export default class ListNew extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            URL: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=',
            loading: false,
            drinks: null,
            searchValue: 'Gin'
        }
    }

    async getCocktailsByIngredient() {
        try{
            var content = {drinks: null};
            const response = await fetch(this.state.URL + this.state.searchValue);
            content = await response.json();
        }
        catch(e){
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

render() {
    const cocktailDivsList= [];

    if(this.state.drinks) {
        this.state.drinks.forEach(cocktail => {
            
            cocktailDivsList.push(
             <div>
                     
                <Container>
                 <Card style={{width: '400px'}}>
                  <div id="cartainer">
                        
                        <Card.Img variant="top" src={cocktail.strDrinkThumb}/>
                    <Card.Body>
                        <Card.Title><h5>The {cocktail.strDrink}</h5></Card.Title>
                    <Card.Text>View Mixers</Card.Text>

                    </Card.Body>

                  </div>
                 </Card>
                </Container>
            
                <br/>
             </div>
            );
        
        });
    }

    return( 
    <div className="primary">
     <div>
        <Stylesheet/>
     <Card/>
        
            
        
        {cocktailDivsList}
        
          
        </div>
     </div>
   
    )
}
}
*/