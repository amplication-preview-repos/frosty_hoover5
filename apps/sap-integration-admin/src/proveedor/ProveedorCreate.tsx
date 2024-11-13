import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ProductoTitle } from "../producto/ProductoTitle";

export const ProveedorCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="contacto" source="contacto" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="nombreProveedor" source="nombreProveedor" />
        <ReferenceInput
          source="producto.id"
          reference="Producto"
          label="Producto"
        >
          <SelectInput optionText={ProductoTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
