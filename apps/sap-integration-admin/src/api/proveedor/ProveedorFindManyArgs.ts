import { ProveedorWhereInput } from "./ProveedorWhereInput";
import { ProveedorOrderByInput } from "./ProveedorOrderByInput";

export type ProveedorFindManyArgs = {
  where?: ProveedorWhereInput;
  orderBy?: Array<ProveedorOrderByInput>;
  skip?: number;
  take?: number;
};
