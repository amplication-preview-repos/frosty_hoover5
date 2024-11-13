import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FacturaServiceBase } from "./base/factura.service.base";

@Injectable()
export class FacturaService extends FacturaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
