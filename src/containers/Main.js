import React, { PureComponent } from 'react';
import ListItems from '../components/ListItem';
import Rodal from 'rodal';

// include styles
import 'rodal/lib/rodal.css';

class Main extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			selectedDrink: [],
			drinks: [
				{
					id: 1237891723,
					drinkName: 'Gin & Tonic',
					drinkType: 'Cocktail',
					details: {
						description: 'this is a description',
						price: '45',
						imageUrl: 'gin&tonic.png',
					},
				},
				{
					id: 98192309123,
					drinkName: 'Mai Tai',
					drinkType: 'Cocktail',
					details: {
						description: 'this is a description',
						price: '45',
						imageUrl: 'maitai.png',
					},
				},
				{
					id: 901823723123,
					drinkName: 'Whiskey Sour',
					drinkType: 'Cocktail',
					details: {
						description: 'this is a description',
						price: '45',
						imageUrl: 'whiskeysour.png',
					},
				},
				{
					id: 293801928390,
					drinkName: 'Mojito',
					drinkType: 'Cocktail',
					details: {
						description: 'this is a description',
						price: '45',
						imageUrl: 'mojito.png',
					},
				},
				{
					id: 981471309234,
					drinkName: 'Martini',
					drinkType: 'Cocktail',
					details: {
						description: 'this is a description',
						price: '45',
						imageUrl: 'martini.png',
					},
				},
				{
					id: 987234723498,
					drinkName: 'Sidecar',
					drinkType: 'Cocktail',
					details: {
						description: 'this is a description',
						price: '45',
						imageUrl: 'sidecar.png',
					},
				},
			],
			visible: false,
		};
	}

	selectedDrink = drinkName => {
		const { drinks } = this.state;
		drinks.filter((e, i) => {
			if (e.drinkName === drinkName) {
				this.setState({ selectedDrink: e, visible: true });
			}
		});
	};

	hide = () => {
		this.setState({ visible: false });
	};
	render() {
		const { drinks, selectedDrink, visible } = this.state;
		return (
			<div className="main">
				<div className="title align_center fl">
					<h1 className="title__heading title_heading-main-color">
						<span className="text-blue">BEST OF:</span> COCKTAILS
					</h1>
				</div>
				<div className="drinks__list fl__d-row">
					{drinks.map(drink => {
						return <ListItems key={drink.id} drink={drink} handleClick={this.selectedDrink} />;
					})}
				</div>
				<Rodal visible={visible} onClose={this.hide.bind(this)}>
					{
						selectedDrink.length === 0 ? null : (
							<div className="fl__d-col centralize">
								<h1>{selectedDrink.drinkName}</h1>
								<h6>{selectedDrink.drinkType}</h6>
							</div>
						)
					}
				</Rodal>
			</div>
		);
	}
}

export default Main;
