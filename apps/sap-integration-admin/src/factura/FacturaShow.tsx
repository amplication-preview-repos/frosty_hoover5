import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { CLIENTE_TITLE_FIELD } from "../cliente/ClienteTitle";

export const FacturaShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Cliente" source="cliente.id" reference="Cliente">
          <TextField source={CLIENTE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="fechaEmision" source="fechaEmision" />
        <TextField label="ID" source="id" />
        <TextField label="numeroFactura" source="numeroFactura" />
        <TextField label="total" source="total" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
