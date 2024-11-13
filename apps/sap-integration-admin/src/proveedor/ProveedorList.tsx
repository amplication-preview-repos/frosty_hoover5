import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PRODUCTO_TITLE_FIELD } from "../producto/ProductoTitle";

export const ProveedorList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Proveedors"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="contacto" source="contacto" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="nombreProveedor" source="nombreProveedor" />
        <ReferenceField
          label="Producto"
          source="producto.id"
          reference="Producto"
        >
          <TextField source={PRODUCTO_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
