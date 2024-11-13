import * as graphql from "@nestjs/graphql";
import { ProductoResolverBase } from "./base/producto.resolver.base";
import { Producto } from "./base/Producto";
import { ProductoService } from "./producto.service";

@graphql.Resolver(() => Producto)
export class ProductoResolver extends ProductoResolverBase {
  constructor(protected readonly service: ProductoService) {
    super(service);
  }
}
