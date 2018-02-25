import React, { PureComponent } from 'react';

class Sidebar extends PureComponent {
	render() {
		return (
			<div className="sidebar">
                <i className="icon ion-navicon cursor icon__size--sm"></i>
				<nav className="sidebar__nav">
					<h1 className="sidebar__nav--title">DRINK MENU</h1>
					<ul className="sidebar__nav--menu mg__top--sm">
						<li><a href="">BOTTLES & CANS</a></li>
						<li><a href="">ON TAP</a></li>
						<li><a href="">COCKTAILS</a></li>
						<li><a href="">WINE</a></li>
					</ul>
				</nav>
			</div>
		);
	}
}

export default Sidebar;
