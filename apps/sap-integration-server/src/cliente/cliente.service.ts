import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ClienteServiceBase } from "./base/cliente.service.base";

@Injectable()
export class ClienteService extends ClienteServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
