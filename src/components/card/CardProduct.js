import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { replaceBlanksSpace } from "../../const/data/replaceBlanksSpace";

import {ReactComponent  as Add} from '../../assets/icons/Add.svg'
const Color = ({ colorHex, colorName }) => {
    const colorStyle = {
        backgroundColor: colorHex,
    };
    return (
        <div className="card-product__colors-box s-mr-1">
            <div
                className="color-box__content"
                style={colorStyle}
                title={colorName}
            ></div>
        </div>
    );
};
const CardProduct = ({ sku, className, img, title, stock, colors, offert, price }) => {
    return (
        <Link
            to={`/producto/${sku}/${replaceBlanksSpace(title)}`}
            className={`card-product s-d-block ${className}`}
        >
            <img className="card-product__img" src={img} alt={title} />
            <div className="card-product__info s-pxy-2">
                <h4 className="card-product__info--title t--body-2 s-mb-1">
                    {title}
                </h4>
                <div className="card-product__color-wrapper s-d-flex s-mb-2">
                    {/* {colors.map((color, index) => {
                        return (
                            index < 4 && (
                                <Color
                                    key={index}
                                    colorHex={color.colorimagen}
                                    colorName={color.colornombre}
                                />
                            )
                        );
                    })}
                    {colors.length >= 5 && (
                        <div className="card-product__colors-box card-product__colors-box--add s-mr-1">
                            <div
                                className="color-box__content color-box__content"
                            >
                                <Add/>
                            </div>
                        </div>
                    )} */}
                </div>
                <div className="input-group__helper s-mb-1">
                            {stock}und. Disponibles
                </div>
                <span className="t--price t--heading-3">{price}</span>
            </div>
        </Link>
    );
};

CardProduct.protoTypes = {
    sku: PropTypes.number,
    className: PropTypes.string,
    img: PropTypes.string,
    title: PropTypes.string,
    color: PropTypes.array,
    offert: PropTypes.string,
    price: PropTypes.number,
};

CardProduct.defaultProps = {
    sku: 0,
    className: "",
    img: "",
    title: "card-product",
    offert: "",
    price: 0,
};

export default CardProduct;
