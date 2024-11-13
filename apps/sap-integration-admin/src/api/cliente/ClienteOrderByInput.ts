import { SortOrder } from "../../util/SortOrder";

export type ClienteOrderByInput = {
  createdAt?: SortOrder;
  direccion?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  nombre?: SortOrder;
  telefono?: SortOrder;
  updatedAt?: SortOrder;
};
