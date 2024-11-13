import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PRODUCTO_TITLE_FIELD } from "./ProductoTitle";

export const ProductoShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="descripcion" source="descripcion" />
        <TextField label="ID" source="id" />
        <TextField label="nombreProducto" source="nombreProducto" />
        <TextField label="precioUnitario" source="precioUnitario" />
        <TextField label="stock" source="stock" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Proveedor"
          target="productoId"
          label="Proveedors"
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
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
