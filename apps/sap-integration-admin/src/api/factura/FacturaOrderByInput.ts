import { SortOrder } from "../../util/SortOrder";

export type FacturaOrderByInput = {
  clienteId?: SortOrder;
  createdAt?: SortOrder;
  fechaEmision?: SortOrder;
  id?: SortOrder;
  numeroFactura?: SortOrder;
  total?: SortOrder;
  updatedAt?: SortOrder;
};
