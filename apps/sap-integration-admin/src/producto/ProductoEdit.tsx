import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ProveedorTitle } from "../proveedor/ProveedorTitle";

export const ProductoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
