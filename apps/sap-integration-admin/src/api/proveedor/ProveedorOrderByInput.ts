import { SortOrder } from "../../util/SortOrder";

export type ProveedorOrderByInput = {
  contacto?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  nombreProveedor?: SortOrder;
  productoId?: SortOrder;
  updatedAt?: SortOrder;
};
