import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { FacturaTitle } from "../factura/FacturaTitle";

export const ClienteEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
