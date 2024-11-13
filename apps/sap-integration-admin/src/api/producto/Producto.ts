import { Proveedor } from "../proveedor/Proveedor";

export type Producto = {
  createdAt: Date;
  descripcion: string | null;
  id: string;
  nombreProducto: string | null;
  precioUnitario: number | null;
  proveedors?: Array<Proveedor>;
  stock: number | null;
  updatedAt: Date;
};
