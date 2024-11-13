import { Cliente } from "../cliente/Cliente";

export type Factura = {
  cliente?: Cliente | null;
  createdAt: Date;
  fechaEmision: Date | null;
  id: string;
  numeroFactura: string | null;
  total: number | null;
  updatedAt: Date;
};
