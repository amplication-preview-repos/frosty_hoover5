import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProveedorService } from "./proveedor.service";
import { ProveedorControllerBase } from "./base/proveedor.controller.base";

@swagger.ApiTags("proveedors")
@common.Controller("proveedors")
export class ProveedorController extends ProveedorControllerBase {
  constructor(protected readonly service: ProveedorService) {
    super(service);
  }
}
