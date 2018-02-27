import React, { PureComponent } from 'react';

class Modal extends PureComponent {
    renderModal = () => {
        const {isModalOpen, data} = this.props;
        
        if(isModalOpen){
            return (
            <div className="modal__container">
				<div className="modal__container-box">
                    {
                        data.map((dataItem) => {
                            return (
                                <div>
                                    <h1>{dataItem.drinkName}</h1>
                                </div>
                            ) 
                        })
                    }
                </div>
			</div>
            )
        }
    }
	render() {
		return this.renderModal;
	}
}


export default Modal;