import * as graphql from "@nestjs/graphql";
import { ProveedorResolverBase } from "./base/proveedor.resolver.base";
import { Proveedor } from "./base/Proveedor";
import { ProveedorService } from "./proveedor.service";

@graphql.Resolver(() => Proveedor)
export class ProveedorResolver extends ProveedorResolverBase {
  constructor(protected readonly service: ProveedorService) {
    super(service);
  }
}
