import * as graphql from "@nestjs/graphql";
import { ClienteResolverBase } from "./base/cliente.resolver.base";
import { Cliente } from "./base/Cliente";
import { ClienteService } from "./cliente.service";

@graphql.Resolver(() => Cliente)
export class ClienteResolver extends ClienteResolverBase {
  constructor(protected readonly service: ClienteService) {
    super(service);
  }
}
