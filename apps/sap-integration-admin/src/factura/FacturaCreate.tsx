import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { ClienteTitle } from "../cliente/ClienteTitle";

export const FacturaCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="cliente.id" reference="Cliente" label="Cliente">
          <SelectInput optionText={ClienteTitle} />
        </ReferenceInput>
        <DateTimeInput label="fechaEmision" source="fechaEmision" />
        <TextInput label="numeroFactura" source="numeroFactura" />
        <NumberInput label="total" source="total" />
      </SimpleForm>
    </Create>
  );
};
