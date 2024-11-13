import { ClienteWhereUniqueInput } from "../cliente/ClienteWhereUniqueInput";

export type FacturaUpdateInput = {
  cliente?: ClienteWhereUniqueInput | null;
  fechaEmision?: Date | null;
  numeroFactura?: string | null;
  total?: number | null;
};
