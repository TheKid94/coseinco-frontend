import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { uiCloseCartP } from "../../redux-action/uiAction";
import { getProductById } from "../../redux-action/productDetailAction";

import motherboard from "../../assets/images/products/motherboard.png";
import procesador from "../../assets/images/products/procesador.jpg";
import { useHistory } from "react-router";

const CartProduct = ({ img, title, quantity, price }) => {
    return (
        <div className="cart-preview__product">
            <a href="www.google.com" className="product__link">
                <img src={img} alt={title} className="product__img" />
            </a>
            <span className="product__title t--body-3 t--primary">{title}</span>
            <span className="t--body-3 t--secundary">Cantidad: {quantity}</span>
            <span className="t--price s-right t--heading-5">{price}</span>
        </div>
    );
};
const CartPreview = () => {
    const [itemsCart, setItemsCart] = useState(null);
    const history = useHistory();
    const dispatch = useDispatch();

    const handleCloseCartP = () => {
        dispatch(uiCloseCartP());
    };

    const { openCartP } = useSelector((state) => state.ui);

    useEffect(() => {
        if (openCartP === true) {
            const checkScroll = () => {
                const scrollY = window.pageYOffset;
                if (scrollY >= 50) {
                    dispatch(uiCloseCartP());
                }
            };
            window.addEventListener("scroll", checkScroll);
            return () => {
                window.removeEventListener("scroll", checkScroll);
            };
        }
    }, [openCartP, dispatch]);

    useEffect(() => {
        if (!itemsCart) {
            setItemsCart(
                localStorage.getItem("carrito")
                    ? JSON.parse(localStorage.getItem("carrito"))
                    : []
            );
        }
    }, [itemsCart]);

    const handleGoCart = () => {
        history.push("/carrito");
        dispatch(uiCloseCartP());
    };

    return (
        <div className="cart-preview">
            <div className="cart-preview__content animation__content s-pxy-2">
                {itemsCart !== null && itemsCart.length > 0 ? (
                    <>
                        <h3 className="s-mb-05">Carrito de compras</h3>
                        <p className="t--body-3 s-mb-2">
                            {" "}
                            ({itemsCart.length}) Productos{" "}
                        </p>
                        <div className="cart-preview__products s-pb-2 s-mb-2">
                            <CartProduct
                                img={procesador}
                                title="Intel I5 11400F 2.5GHZ"
                                quantity={1}
                                price={950.5}
                            />
                        </div>
                        <div className="t--heading-4 d-flex s-main-justify s-mb-2">
                            <span className="cart-preview-content__subtotal">
                                Subtotal({itemsCart.length})
                            </span>
                            <span className="t--price">128.00</span>
                        </div>
                        <button
                            onClick={handleGoCart}
                            className="btn btn--primary btn--full"
                        >
                            Ir al carrito
                        </button>
                    </>
                ) : (
                    <div
                        className="s-d-flex s-main-center s-cross-center"
                        style={{ height: "154px  " }}
                    >
                        <p className="t--body-2">
                            {" "}
                            No hay productos en tu carrito{" "}
                        </p>
                        <Link
                            to="/catalogo/Novedades"
                            onClick={handleCloseCartP}
                            className="t--link-1"
                            href="www.google.com"
                        >
                            Vamos a comprar
                        </Link>
                    </div>
                )}
            </div>
            <div
                className="cart-preview__overlay animation__overlay "
                onClick={handleCloseCartP}
            ></div>
        </div>
    );
};

export default CartPreview;
