import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { PRODUCTO_TITLE_FIELD } from "../producto/ProductoTitle";

export const ProveedorShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
