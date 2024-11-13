import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ProveedorListRelationFilter } from "../proveedor/ProveedorListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ProductoWhereInput = {
  descripcion?: StringNullableFilter;
  id?: StringFilter;
  nombreProducto?: StringNullableFilter;
  precioUnitario?: FloatNullableFilter;
  proveedors?: ProveedorListRelationFilter;
  stock?: IntNullableFilter;
};
