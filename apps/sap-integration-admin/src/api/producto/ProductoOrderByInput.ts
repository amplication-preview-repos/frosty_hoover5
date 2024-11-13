import { SortOrder } from "../../util/SortOrder";

export type ProductoOrderByInput = {
  createdAt?: SortOrder;
  descripcion?: SortOrder;
  id?: SortOrder;
  nombreProducto?: SortOrder;
  precioUnitario?: SortOrder;
  stock?: SortOrder;
  updatedAt?: SortOrder;
};
