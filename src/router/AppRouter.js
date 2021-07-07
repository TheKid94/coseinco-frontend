import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import Layout from "../components/layout/Layout";
import Cart from "../views/Cart";
import Catalog from "../views/Catalog";
import Home from "../views/Home";
import Product from "../views/Product";
import Search from "../views/Search";

const AppRouter = () => {
    return (
        <Router>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route
                        exact
                        path="/catalogo/:CategoryName"
                        component={Catalog}
                    />
                    <Route exact path="/busqueda/:SearchParam" component={Search} />
                    <Route exact path="/carrito" component={Cart} />
                    <Route
                        exact
                        path="/producto/:SKU/:ProductName"
                        component={Product}
                    />
                    <Redirect to="/" />
                </Switch>
            </Layout>
        </Router>
    );
};

export default AppRouter;
