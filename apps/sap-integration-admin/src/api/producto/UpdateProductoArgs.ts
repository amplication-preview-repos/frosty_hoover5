import { ProductoWhereUniqueInput } from "./ProductoWhereUniqueInput";
import { ProductoUpdateInput } from "./ProductoUpdateInput";

export type UpdateProductoArgs = {
  where: ProductoWhereUniqueInput;
  data: ProductoUpdateInput;
};
