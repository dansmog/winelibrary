import React, { PureComponent } from 'react';

class ListItems extends PureComponent {
	render() {
		return (
			<div className="drinks__list-items mg__top--md" onClick={ () => this.props.handleClick(this.props.drink.drinkName) }>
				<img src={`images/${this.props.drink.details.imageUrl}`} alt={this.props.drink.drinkName} />
				<p>{this.props.drink.drinkName}</p>
			</div>
		);
	}
}

export default ListItems;
