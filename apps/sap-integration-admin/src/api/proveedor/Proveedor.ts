import { Producto } from "../producto/Producto";

export type Proveedor = {
  contacto: string | null;
  createdAt: Date;
  email: string | null;
  id: string;
  nombreProveedor: string | null;
  producto?: Producto | null;
  updatedAt: Date;
};
