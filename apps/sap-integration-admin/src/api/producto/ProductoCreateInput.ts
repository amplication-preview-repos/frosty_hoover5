import { ProveedorCreateNestedManyWithoutProductosInput } from "./ProveedorCreateNestedManyWithoutProductosInput";

export type ProductoCreateInput = {
  descripcion?: string | null;
  nombreProducto?: string | null;
  precioUnitario?: number | null;
  proveedors?: ProveedorCreateNestedManyWithoutProductosInput;
  stock?: number | null;
};
