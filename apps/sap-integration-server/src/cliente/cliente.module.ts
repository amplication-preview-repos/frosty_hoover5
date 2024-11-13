import { Module } from "@nestjs/common";
import { ClienteModuleBase } from "./base/cliente.module.base";
import { ClienteService } from "./cliente.service";
import { ClienteController } from "./cliente.controller";
import { ClienteResolver } from "./cliente.resolver";

@Module({
  imports: [ClienteModuleBase],
  controllers: [ClienteController],
  providers: [ClienteService, ClienteResolver],
  exports: [ClienteService],
})
export class ClienteModule {}
