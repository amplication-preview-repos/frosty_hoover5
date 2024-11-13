import { ProveedorUpdateManyWithoutProductosInput } from "./ProveedorUpdateManyWithoutProductosInput";

export type ProductoUpdateInput = {
  descripcion?: string | null;
  nombreProducto?: string | null;
  precioUnitario?: number | null;
  proveedors?: ProveedorUpdateManyWithoutProductosInput;
  stock?: number | null;
};
