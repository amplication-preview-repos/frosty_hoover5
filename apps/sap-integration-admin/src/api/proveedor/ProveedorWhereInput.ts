import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductoWhereUniqueInput } from "../producto/ProductoWhereUniqueInput";

export type ProveedorWhereInput = {
  contacto?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  nombreProveedor?: StringNullableFilter;
  producto?: ProductoWhereUniqueInput;
};
