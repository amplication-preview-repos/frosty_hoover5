import { ClienteWhereUniqueInput } from "../cliente/ClienteWhereUniqueInput";

export type FacturaCreateInput = {
  cliente?: ClienteWhereUniqueInput | null;
  fechaEmision?: Date | null;
  numeroFactura?: string | null;
  total?: number | null;
};
