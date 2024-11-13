import { Module } from "@nestjs/common";
import { ProveedorModuleBase } from "./base/proveedor.module.base";
import { ProveedorService } from "./proveedor.service";
import { ProveedorController } from "./proveedor.controller";
import { ProveedorResolver } from "./proveedor.resolver";

@Module({
  imports: [ProveedorModuleBase],
  controllers: [ProveedorController],
  providers: [ProveedorService, ProveedorResolver],
  exports: [ProveedorService],
})
export class ProveedorModule {}
