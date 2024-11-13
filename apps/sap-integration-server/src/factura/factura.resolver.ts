import * as graphql from "@nestjs/graphql";
import { FacturaResolverBase } from "./base/factura.resolver.base";
import { Factura } from "./base/Factura";
import { FacturaService } from "./factura.service";

@graphql.Resolver(() => Factura)
export class FacturaResolver extends FacturaResolverBase {
  constructor(protected readonly service: FacturaService) {
    super(service);
  }
}
