import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FacturaListRelationFilter } from "../factura/FacturaListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type ClienteWhereInput = {
  direccion?: StringNullableFilter;
  email?: StringNullableFilter;
  facturas?: FacturaListRelationFilter;
  id?: StringFilter;
  nombre?: StringNullableFilter;
  telefono?: StringNullableFilter;
};
