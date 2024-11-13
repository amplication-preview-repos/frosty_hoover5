import { Factura } from "../factura/Factura";

export type Cliente = {
  createdAt: Date;
  direccion: string | null;
  email: string | null;
  facturas?: Array<Factura>;
  id: string;
  nombre: string | null;
  telefono: string | null;
  updatedAt: Date;
};
