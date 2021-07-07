import { types } from "../const/types";

const baseUrl = "https://ezzetacompany.com/tienda";

export const cartProductAdd = (product) => {
    return async (dispatch) => {
        try {
            const resp = await fetch(`${baseUrl}/cart/add`, {
                method: "post",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(product)
            });
            const data = await resp.json();
            dispatch(cartProductAdded(data));
        } catch (error) {
            console.log(error);
        }
    };
};

const cartProductAdded = (resp) => ({
    type: types.cartProductAdded,
    payload: resp
})


export const cartProductDelete = () =>{}

const cartProductDeleted = () =>{}