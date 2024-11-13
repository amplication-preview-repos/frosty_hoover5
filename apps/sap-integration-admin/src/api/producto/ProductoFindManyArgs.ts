import { ProductoWhereInput } from "./ProductoWhereInput";
import { ProductoOrderByInput } from "./ProductoOrderByInput";

export type ProductoFindManyArgs = {
  where?: ProductoWhereInput;
  orderBy?: Array<ProductoOrderByInput>;
  skip?: number;
  take?: number;
};
