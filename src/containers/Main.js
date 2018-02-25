import React, { PureComponent } from 'react';
import ListItems from '../components/ListItem';

class Main extends PureComponent {
	constructor(props) {
		super(props);

		this.state = {
			drinks: [
				{
					id: Date.now() + 1,
					drinkName: 'Gin & Tonic',
					drinkType: 'Cocktail',
					details: {
						description: 'this is a description',
						price: '45',
						imageUrl: 'gin&tonic.png',
					},
				},
				{
					id: Date.now() + 1,
					drinkName: 'Mai Tai',
					drinkType: 'Cocktail',
					details: {
						description: 'this is a description',
						price: '45',
						imageUrl: 'maitai.png',
					},
				},
				{
					id: Date.now() + 1,
					drinkName: 'Whiskey Sour',
					drinkType: 'Cocktail',
					details: {
						description: 'this is a description',
						price: '45',
						imageUrl: 'whiskeysour.png',
					},
				},
                {
                    id: Date.now() + 1,
                    drinkName: 'Mojito',
                    drinkType: 'Cocktail',
                    details: {
                        description: "this is a description",
                        price: '45',
                        imageUrl: 'mojito.png'
                    }
                },
                {
                    id: Date.now() + 1,
                    drinkName: 'Martini',
                    drinkType: 'Cocktail',
                    details: {
                        description: "this is a description",
                        price: '45',
                        imageUrl: 'martini.png'
                    }
                },
                {
                    id: Date.now() + 1,
                    drinkName: 'Sidecar',
                    drinkType: 'Cocktail',
                    details: {
                        description: "this is a description",
                        price: '45',
                        imageUrl: 'sidecar.png'
                    }
                },
			],
		};
	}
	render() {
		const { drinks } = this.state;
		return (
			<div className="main">
				<div className="title align_center fl">
					<h1 class="title__heading title_heading-main-color">
						<span className="text-blue">BEST OF:</span> COCKTAILS
					</h1>
				</div>
				<div className="drinks__list fl__d-row">
					{drinks.map(drink => {
						return <ListItems key={drink.id} drink={drink} />;
					})}
				</div>
			</div>
		);
	}
}

export default Main;
