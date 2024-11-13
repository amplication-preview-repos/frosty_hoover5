import { FacturaUpdateManyWithoutClientesInput } from "./FacturaUpdateManyWithoutClientesInput";

export type ClienteUpdateInput = {
  direccion?: string | null;
  email?: string | null;
  facturas?: FacturaUpdateManyWithoutClientesInput;
  nombre?: string | null;
  telefono?: string | null;
};
