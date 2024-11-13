import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { FacturaTitle } from "../factura/FacturaTitle";

export const ClienteCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="direccion" multiline source="direccion" />
        <TextInput label="email" source="email" type="email" />
        <ReferenceArrayInput source="facturas" reference="Factura">
          <SelectArrayInput
            optionText={FacturaTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="nombre" source="nombre" />
        <TextInput label="telefono" source="telefono" />
      </SimpleForm>
    </Create>
  );
};
