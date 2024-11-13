import { Module } from "@nestjs/common";
import { ProductoModuleBase } from "./base/producto.module.base";
import { ProductoService } from "./producto.service";
import { ProductoController } from "./producto.controller";
import { ProductoResolver } from "./producto.resolver";

@Module({
  imports: [ProductoModuleBase],
  controllers: [ProductoController],
  providers: [ProductoService, ProductoResolver],
  exports: [ProductoService],
})
export class ProductoModule {}
