import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CLIENTE_TITLE_FIELD } from "../cliente/ClienteTitle";

export const FacturaList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Facturas"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <ReferenceField label="Cliente" source="cliente.id" reference="Cliente">
          <TextField source={CLIENTE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="fechaEmision" source="fechaEmision" />
        <TextField label="ID" source="id" />
        <TextField label="numeroFactura" source="numeroFactura" />
        <TextField label="total" source="total" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
