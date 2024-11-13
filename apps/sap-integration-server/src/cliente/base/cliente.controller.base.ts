/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ClienteService } from "../cliente.service";
import { ClienteCreateInput } from "./ClienteCreateInput";
import { Cliente } from "./Cliente";
import { ClienteFindManyArgs } from "./ClienteFindManyArgs";
import { ClienteWhereUniqueInput } from "./ClienteWhereUniqueInput";
import { ClienteUpdateInput } from "./ClienteUpdateInput";
import { FacturaFindManyArgs } from "../../factura/base/FacturaFindManyArgs";
import { Factura } from "../../factura/base/Factura";
import { FacturaWhereUniqueInput } from "../../factura/base/FacturaWhereUniqueInput";

export class ClienteControllerBase {
  constructor(protected readonly service: ClienteService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Cliente })
  async createCliente(
    @common.Body() data: ClienteCreateInput
  ): Promise<Cliente> {
    return await this.service.createCliente({
      data: data,
      select: {
        createdAt: true,
        direccion: true,
        email: true,
        id: true,
        nombre: true,
        telefono: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Cliente] })
  @ApiNestedQuery(ClienteFindManyArgs)
  async clientes(@common.Req() request: Request): Promise<Cliente[]> {
    const args = plainToClass(ClienteFindManyArgs, request.query);
    return this.service.clientes({
      ...args,
      select: {
        createdAt: true,
        direccion: true,
        email: true,
        id: true,
        nombre: true,
        telefono: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Cliente })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async cliente(
    @common.Param() params: ClienteWhereUniqueInput
  ): Promise<Cliente | null> {
    const result = await this.service.cliente({
      where: params,
      select: {
        createdAt: true,
        direccion: true,
        email: true,
        id: true,
        nombre: true,
        telefono: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Cliente })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCliente(
    @common.Param() params: ClienteWhereUniqueInput,
    @common.Body() data: ClienteUpdateInput
  ): Promise<Cliente | null> {
    try {
      return await this.service.updateCliente({
        where: params,
        data: data,
        select: {
          createdAt: true,
          direccion: true,
          email: true,
          id: true,
          nombre: true,
          telefono: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Cliente })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCliente(
    @common.Param() params: ClienteWhereUniqueInput
  ): Promise<Cliente | null> {
    try {
      return await this.service.deleteCliente({
        where: params,
        select: {
          createdAt: true,
          direccion: true,
          email: true,
          id: true,
          nombre: true,
          telefono: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/facturas")
  @ApiNestedQuery(FacturaFindManyArgs)
  async findFacturas(
    @common.Req() request: Request,
    @common.Param() params: ClienteWhereUniqueInput
  ): Promise<Factura[]> {
    const query = plainToClass(FacturaFindManyArgs, request.query);
    const results = await this.service.findFacturas(params.id, {
      ...query,
      select: {
        cliente: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        fechaEmision: true,
        id: true,
        numeroFactura: true,
        total: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/facturas")
  async connectFacturas(
    @common.Param() params: ClienteWhereUniqueInput,
    @common.Body() body: FacturaWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      facturas: {
        connect: body,
      },
    };
    await this.service.updateCliente({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/facturas")
  async updateFacturas(
    @common.Param() params: ClienteWhereUniqueInput,
    @common.Body() body: FacturaWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      facturas: {
        set: body,
      },
    };
    await this.service.updateCliente({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/facturas")
  async disconnectFacturas(
    @common.Param() params: ClienteWhereUniqueInput,
    @common.Body() body: FacturaWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      facturas: {
        disconnect: body,
      },
    };
    await this.service.updateCliente({
      where: params,
      data,
      select: { id: true },
    });
  }
}
