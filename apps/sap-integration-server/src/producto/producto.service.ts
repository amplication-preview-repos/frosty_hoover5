import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProductoServiceBase } from "./base/producto.service.base";

@Injectable()
export class ProductoService extends ProductoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
