import React, { PureComponent } from 'react';

class ListItems extends PureComponent {
    render(){
        return(
            <div className="drinks__list-items">
                <img 
                    src={`images/${this.props.drink.details.imageUrl}`}
                    alt={this.props.drink.drinkName}
                />
                <p><span></span>{this.props.drink.drinkName}</p>
            </div>
        )
    }
}

export default ListItems;