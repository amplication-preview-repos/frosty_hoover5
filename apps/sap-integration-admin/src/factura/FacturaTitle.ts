import { Factura as TFactura } from "../api/factura/Factura";

export const FACTURA_TITLE_FIELD = "numeroFactura";

export const FacturaTitle = (record: TFactura): string => {
  return record.numeroFactura?.toString() || String(record.id);
};
