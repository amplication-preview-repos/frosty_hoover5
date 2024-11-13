import { Producto as TProducto } from "../api/producto/Producto";

export const PRODUCTO_TITLE_FIELD = "nombreProducto";

export const ProductoTitle = (record: TProducto): string => {
  return record.nombreProducto?.toString() || String(record.id);
};
