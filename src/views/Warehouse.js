import React, { useState } from "react";
import axios from "axios";
import LayoutAdmin from "../components/layout/LayoutAdmin";
import Select from "react-select";
import { ReactComponent as Edit } from "../assets/icons/Edit.svg";
import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
const options = [
  { value: 1, label: "DNI" },
  { value: 2, label: "C/E" },
  { value: 3, label: "RUC" },
];

const state = [
  { value: 1, label: "Disponible" },
  { value: 2, label: "Reservado" },
  { value: 3, label: "Observado" },
];

const Warehouse = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  const [inventario, setInventario] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/admin/inventario/getAll`)
      .then((response) => {
        const { data } = response;
        setInventario(data.data.data);
      });
  }, []);

  return (
    <LayoutAdmin>
      <h2 className="s-mb-4">Inventario</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="ui-bg s-mb-4 s-pxy-3">
        <div className="s-d-flex s-mb-2">
          <div className="s-50 s-pr-1">
            <label
              className="input-group__label d-block s-mb-1"
              htmlFor="input"
            >
              Producto
            </label>
            <Controller
              control={control}
              name="product"
              rules={{ required: "Campo obligatorio " }}
              render={({ field }) => (
                <Select
                  {...field}
                  classNamePrefix="input-select"
                  className={`t--body-2 s-mb-05 ${
                    errors.product ? "input-select--error" : ""
                  }`}
                  placeholder=""
                  theme={(theme) => ({
                    ...theme,
                    colors: {
                      ...theme.colors,
                      primary: "#c6c6c6",
                      primary25: "#e5e5e5",
                      primary50: "#e0e0e0",
                      neutral0: "#161616",
                    },
                  })}
                  options={options}
                />
              )}
            ></Controller>
            {errors.product && (
              <span className="input-group__helper input-group__helper--error s-d-block s-left">
                {errors.product.message}
              </span>
            )}
          </div>
          <div className="s-50 s-pl-1">
            <label
              className="input-group__label d-block s-mb-1"
              htmlFor="input"
            >
              Estado
            </label>
            <Controller
              control={control}
              name="state"
              rules={{ required: "Campo obligatorio " }}
              render={({ field }) => (
                <Select
                  {...field}
                  classNamePrefix="input-select"
                  className={`t--body-2 s-mb-05 ${
                    errors.state ? "input-select--error" : ""
                  }`}
                  placeholder=""
                  theme={(theme) => ({
                    ...theme,
                    colors: {
                      ...theme.colors,
                      primary: "#c6c6c6",
                      primary25: "#e5e5e5",
                      primary50: "#e0e0e0",
                      neutral0: "#161616",
                    },
                  })}
                  options={state}
                />
              )}
            ></Controller>
            {errors.state && (
              <span className="input-group__helper input-group__helper--error s-d-block s-left">
                {errors.state.message}
              </span>
            )}
          </div>
        </div>
        <div className="s-1-3 s-pl-1 s-to-right">
          <button type="submit" className="btn btn--full btn--primary">
            Guardar
          </button>
        </div>
      </form>
      <table className="rwd-table s-100">
        <thead>
          <tr>
            <th></th>
            <th>Producto</th>
            <th>Nro. Serie</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {inventario !== null &&
            inventario.map((e) => (
              <tr>
                <td>
                  {" "}
                  <button className="btn btn--icon btn--ghost">
                    {" "}
                    <Edit className="btn__icon" />
                  </button>
                </td>
                <td data-th="Movie Title">{e.productoID}</td>
                <td data-th="Genre">{e.nSerie}</td>
                <td data-th="Year">{e.estado}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </LayoutAdmin>
  );
};

export default Warehouse;
