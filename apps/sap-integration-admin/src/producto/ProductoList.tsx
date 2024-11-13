import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ProductoList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Productos"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="descripcion" source="descripcion" />
        <TextField label="ID" source="id" />
        <TextField label="nombreProducto" source="nombreProducto" />
        <TextField label="precioUnitario" source="precioUnitario" />
        <TextField label="stock" source="stock" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
