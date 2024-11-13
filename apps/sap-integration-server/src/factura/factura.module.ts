import { Module } from "@nestjs/common";
import { FacturaModuleBase } from "./base/factura.module.base";
import { FacturaService } from "./factura.service";
import { FacturaController } from "./factura.controller";
import { FacturaResolver } from "./factura.resolver";

@Module({
  imports: [FacturaModuleBase],
  controllers: [FacturaController],
  providers: [FacturaService, FacturaResolver],
  exports: [FacturaService],
})
export class FacturaModule {}
