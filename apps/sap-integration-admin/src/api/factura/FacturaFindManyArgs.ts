import { FacturaWhereInput } from "./FacturaWhereInput";
import { FacturaOrderByInput } from "./FacturaOrderByInput";

export type FacturaFindManyArgs = {
  where?: FacturaWhereInput;
  orderBy?: Array<FacturaOrderByInput>;
  skip?: number;
  take?: number;
};
