import { Cliente as TCliente } from "../api/cliente/Cliente";

export const CLIENTE_TITLE_FIELD = "nombre";

export const ClienteTitle = (record: TCliente): string => {
  return record.nombre?.toString() || String(record.id);
};
