import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClienteService } from "./cliente.service";
import { ClienteControllerBase } from "./base/cliente.controller.base";

@swagger.ApiTags("clientes")
@common.Controller("clientes")
export class ClienteController extends ClienteControllerBase {
  constructor(protected readonly service: ClienteService) {
    super(service);
  }
}
