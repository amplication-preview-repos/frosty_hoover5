import { ProductoWhereUniqueInput } from "../producto/ProductoWhereUniqueInput";

export type ProveedorUpdateInput = {
  contacto?: string | null;
  email?: string | null;
  nombreProveedor?: string | null;
  producto?: ProductoWhereUniqueInput | null;
};
