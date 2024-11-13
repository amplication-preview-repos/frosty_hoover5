import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProveedorServiceBase } from "./base/proveedor.service.base";

@Injectable()
export class ProveedorService extends ProveedorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
