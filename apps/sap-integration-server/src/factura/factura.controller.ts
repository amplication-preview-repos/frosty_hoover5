import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FacturaService } from "./factura.service";
import { FacturaControllerBase } from "./base/factura.controller.base";

@swagger.ApiTags("facturas")
@common.Controller("facturas")
export class FacturaController extends FacturaControllerBase {
  constructor(protected readonly service: FacturaService) {
    super(service);
  }
}
