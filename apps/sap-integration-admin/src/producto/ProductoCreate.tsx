import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ProveedorTitle } from "../proveedor/ProveedorTitle";

export const ProductoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="descripcion" multiline source="descripcion" />
        <TextInput label="nombreProducto" source="nombreProducto" />
        <NumberInput label="precioUnitario" source="precioUnitario" />
        <ReferenceArrayInput source="proveedors" reference="Proveedor">
          <SelectArrayInput
            optionText={ProveedorTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <NumberInput step={1} label="stock" source="stock" />
      </SimpleForm>
    </Create>
  );
};
