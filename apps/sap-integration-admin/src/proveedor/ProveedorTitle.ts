import { Proveedor as TProveedor } from "../api/proveedor/Proveedor";

export const PROVEEDOR_TITLE_FIELD = "contacto";

export const ProveedorTitle = (record: TProveedor): string => {
  return record.contacto?.toString() || String(record.id);
};
