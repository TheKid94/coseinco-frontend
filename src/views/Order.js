import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postOrder } from "../redux-action/cartAction";
import { ReactComponent as Checkmark } from "../assets/icons/Checkmark.svg";
import { useHistory } from "react-router-dom";
const ProductCart = ({ imgUrl, name, sku, cantidad, precioUnit, subtotal }) => {
  return (
    <div className="ui-bg s-mb-2 s-d-flex">
      <div className="s-20">
        <img src={imgUrl} alt="" />
      </div>
      <div className="s-80 s-pl-2">
        <div className="t--body-2 s-main-justify s-cross-center s-mb-1">
          <span> {name} </span>
        </div>
        <div className="t--secundary t--body-3 s-column s-left">
          <span className="s-pb-05"> SKU: {sku} </span>
          <span className="s-pb-05"> Cantidad: {cantidad} </span>
          <span className="s-pb-05">
            Precio/u:
            <span className="t--price">{precioUnit}</span>
          </span>
        </div>
        <div className="s-right">
          <h6 className="t--secundary t--price"> {subtotal}</h6>
        </div>
      </div>
    </div>
  );
};

const Order = () => {
  const { productsList, shipment } = useSelector((state) => state.cart);
  const [orderData, setOrderData] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    productsList !== undefined &&
      setOrderData({
        productos: productsList.map((product) => ({
          _id: product._id,
          cantidad: product.cantidadCarrito,
        })),
        datos: shipment,
      });
  }, []);

  useEffect(() => {
    orderData !== null && dispatch(postOrder(orderData));
  }, [orderData, dispatch]);

  return (
    <div className="s-60 ui-bg s-pxy-3 s-to-center l-section">
      <Checkmark className="order__icon" />
      <div className="s-center">
        <h2 className="s-mb-3">Su compra fue registrada exitosamente</h2>
        <h3 className="s-mb-4">
          Número de pedido: <b>6516165165165</b>
        </h3>
        <div className="s-50 s-to-center t--secundary s-left">
          <h4 className="s-mb-2">Resumen del pedido</h4>
          <ul className="s-mb-2">
            <li className="t--body-2 s-mb-1">
              - Nombre y apellidos: Edwin Ricardo Cajan Morales
            </li>
            <li className="t--body-2 s-mb-1">
              - Nro. Documento: 74711225
            </li>
            <li className="t--body-2 s-mb-1">
              - Nro. Celular: 983734000
            </li>
            <li className="t--body-2 s-mb-1">
              - Email: edcamo20@gmail.com
            </li>
            <li className="t--body-2 s-mb-1">
              - Direccion: calle las ciruelas 153 2do. piso Alborada
            </li>
          </ul>
          <h5 className="s-mb-3">Productos</h5>
          <div className="s-mb-3">
            <ProductCart
              imgUrl={
                "https://compuusa.com.pe/4960-thickbox_default/mouse-logitech-g300s-gaming.jpg"
              }
              name={"Procesador"}
              sku={"1516516"}
              cantidad={"4"}
              precioUnit={"665"}
              subtotal={"51651"}
            />
            <ProductCart
              imgUrl={
                "https://compuusa.com.pe/4960-thickbox_default/mouse-logitech-g300s-gaming.jpg"
              }
              name={"Procesador"}
              sku={"1516516"}
              cantidad={"4"}
              precioUnit={"665"}
              subtotal={"51651"}
            />
          </div>
          <h4 className="s-right t--primary s-mb-3"> Importe total: <span className="t--price s-pl-3">1230</span>  </h4>
          <button
            className="btn btn--primary btn--large btn--full"
            onClick={() => history.push("/")}
          >
            {" "}
            Volver al inicio{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
