import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { ClienteTitle } from "../cliente/ClienteTitle";

export const FacturaEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="cliente.id" reference="Cliente" label="Cliente">
          <SelectInput optionText={ClienteTitle} />
        </ReferenceInput>
        <DateTimeInput label="fechaEmision" source="fechaEmision" />
        <TextInput label="numeroFactura" source="numeroFactura" />
        <NumberInput label="total" source="total" />
      </SimpleForm>
    </Edit>
  );
};
