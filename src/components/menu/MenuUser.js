import React from 'react'
import { ReactComponent as Delivery } from '../../assets/icons/Delivery.svg';
import { ReactComponent as Location } from '../../assets/icons/Location.svg';
import { ReactComponent as User } from '../../assets/icons/User.svg';

const MenuUser = () => {
    return (
        <div className="menu-user s-pxy-2">
            <h3 className="s-mb-2"> Hola Edwin </h3>
            <div className="menu-user__options s-mb-2">
                <a href="google.com" className="list-item s-mb-1 ">
                    <Delivery className="list-item__icon s-mr-1"/>
                    <span className="t--body-2"> Mis órdenes </span>
                </a>
                <a href="google.com" className="list-item s-mb-1 ">
                    <Location className="list-item__icon s-mr-1"/>
                    <span className="t--body-2"> Mis direcciones </span>
                </a>
                <a href="google.com" className="list-item s-mb-1 ">
                    <User className="list-item__icon s-mr-1"/>
                    <span className="t--body-2"> Mis perfil </span>
                </a>
            </div>
            <button className="btn btn--primary btn--full"> Cerrar sesión </button>
        </div>
    )
}

export default MenuUser
