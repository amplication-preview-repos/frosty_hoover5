import { ClienteWhereUniqueInput } from "../cliente/ClienteWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type FacturaWhereInput = {
  cliente?: ClienteWhereUniqueInput;
  fechaEmision?: DateTimeNullableFilter;
  id?: StringFilter;
  numeroFactura?: StringNullableFilter;
  total?: FloatNullableFilter;
};
