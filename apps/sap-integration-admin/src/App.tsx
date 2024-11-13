import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ClienteList } from "./cliente/ClienteList";
import { ClienteCreate } from "./cliente/ClienteCreate";
import { ClienteEdit } from "./cliente/ClienteEdit";
import { ClienteShow } from "./cliente/ClienteShow";
import { FacturaList } from "./factura/FacturaList";
import { FacturaCreate } from "./factura/FacturaCreate";
import { FacturaEdit } from "./factura/FacturaEdit";
import { FacturaShow } from "./factura/FacturaShow";
import { ProductoList } from "./producto/ProductoList";
import { ProductoCreate } from "./producto/ProductoCreate";
import { ProductoEdit } from "./producto/ProductoEdit";
import { ProductoShow } from "./producto/ProductoShow";
import { ProveedorList } from "./proveedor/ProveedorList";
import { ProveedorCreate } from "./proveedor/ProveedorCreate";
import { ProveedorEdit } from "./proveedor/ProveedorEdit";
import { ProveedorShow } from "./proveedor/ProveedorShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"SAPIntegration"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Cliente"
          list={ClienteList}
          edit={ClienteEdit}
          create={ClienteCreate}
          show={ClienteShow}
        />
        <Resource
          name="Factura"
          list={FacturaList}
          edit={FacturaEdit}
          create={FacturaCreate}
          show={FacturaShow}
        />
        <Resource
          name="Producto"
          list={ProductoList}
          edit={ProductoEdit}
          create={ProductoCreate}
          show={ProductoShow}
        />
        <Resource
          name="Proveedor"
          list={ProveedorList}
          edit={ProveedorEdit}
          create={ProveedorCreate}
          show={ProveedorShow}
        />
      </Admin>
    </div>
  );
};

export default App;
