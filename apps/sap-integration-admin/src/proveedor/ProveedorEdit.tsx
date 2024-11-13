import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ProductoTitle } from "../producto/ProductoTitle";

export const ProveedorEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
