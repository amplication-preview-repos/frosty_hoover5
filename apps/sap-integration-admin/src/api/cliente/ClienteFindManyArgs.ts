import { ClienteWhereInput } from "./ClienteWhereInput";
import { ClienteOrderByInput } from "./ClienteOrderByInput";

export type ClienteFindManyArgs = {
  where?: ClienteWhereInput;
  orderBy?: Array<ClienteOrderByInput>;
  skip?: number;
  take?: number;
};
