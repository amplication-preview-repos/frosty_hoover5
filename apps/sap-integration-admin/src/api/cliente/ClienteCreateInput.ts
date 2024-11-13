import { FacturaCreateNestedManyWithoutClientesInput } from "./FacturaCreateNestedManyWithoutClientesInput";

export type ClienteCreateInput = {
  direccion?: string | null;
  email?: string | null;
  facturas?: FacturaCreateNestedManyWithoutClientesInput;
  nombre?: string | null;
  telefono?: string | null;
};
