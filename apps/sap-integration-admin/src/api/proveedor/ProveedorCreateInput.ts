import { ProductoWhereUniqueInput } from "../producto/ProductoWhereUniqueInput";

export type ProveedorCreateInput = {
  contacto?: string | null;
  email?: string | null;
  nombreProveedor?: string | null;
  producto?: ProductoWhereUniqueInput | null;
};
