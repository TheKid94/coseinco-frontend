import React from "react";

const Cart = () => {
    return (
        <div className="grid-container s-pxy-4 s-grid-6 ui-bg l-big-section">
            <div className="s-cols-3 lg-cols-6">
                <div class="t--heading-1 s-mb-4"> Seguimiento del pedido </div>
                <div className="input-group__box s-mb-2">
                    <span className="input-group__label"> Correo electronico </span>
                    <input
                        className="box__text"
                        type="text"
                    />
                </div>
                <div className="input-group__box s-mb-2">
                    <span className="input-group__label"> Nro de seguimiento </span>
                    <input
                        className="box__text"
                        type="text"
                    />
                </div>
                <button className="btn btn--primary btn--full">
                    Aceptar
                </button>
            </div>
        </div>
    );
};

export default Cart;
