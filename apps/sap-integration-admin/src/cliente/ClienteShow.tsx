import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CLIENTE_TITLE_FIELD } from "./ClienteTitle";

export const ClienteShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="direccion" source="direccion" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="nombre" source="nombre" />
        <TextField label="telefono" source="telefono" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Factura"
          target="clienteId"
          label="Facturas"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Cliente"
              source="cliente.id"
              reference="Cliente"
            >
              <TextField source={CLIENTE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="fechaEmision" source="fechaEmision" />
            <TextField label="ID" source="id" />
            <TextField label="numeroFactura" source="numeroFactura" />
            <TextField label="total" source="total" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
