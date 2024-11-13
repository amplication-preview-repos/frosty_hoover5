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
import { ProveedorService } from "../proveedor.service";
import { ProveedorCreateInput } from "./ProveedorCreateInput";
import { Proveedor } from "./Proveedor";
import { ProveedorFindManyArgs } from "./ProveedorFindManyArgs";
import { ProveedorWhereUniqueInput } from "./ProveedorWhereUniqueInput";
import { ProveedorUpdateInput } from "./ProveedorUpdateInput";

export class ProveedorControllerBase {
  constructor(protected readonly service: ProveedorService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Proveedor })
  async createProveedor(
    @common.Body() data: ProveedorCreateInput
  ): Promise<Proveedor> {
    return await this.service.createProveedor({
      data: {
        ...data,

        producto: data.producto
          ? {
              connect: data.producto,
            }
          : undefined,
      },
      select: {
        contacto: true,
        createdAt: true,
        email: true,
        id: true,
        nombreProveedor: true,

        producto: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Proveedor] })
  @ApiNestedQuery(ProveedorFindManyArgs)
  async proveedors(@common.Req() request: Request): Promise<Proveedor[]> {
    const args = plainToClass(ProveedorFindManyArgs, request.query);
    return this.service.proveedors({
      ...args,
      select: {
        contacto: true,
        createdAt: true,
        email: true,
        id: true,
        nombreProveedor: true,

        producto: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Proveedor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async proveedor(
    @common.Param() params: ProveedorWhereUniqueInput
  ): Promise<Proveedor | null> {
    const result = await this.service.proveedor({
      where: params,
      select: {
        contacto: true,
        createdAt: true,
        email: true,
        id: true,
        nombreProveedor: true,

        producto: {
          select: {
            id: true,
          },
        },

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
  @swagger.ApiOkResponse({ type: Proveedor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateProveedor(
    @common.Param() params: ProveedorWhereUniqueInput,
    @common.Body() data: ProveedorUpdateInput
  ): Promise<Proveedor | null> {
    try {
      return await this.service.updateProveedor({
        where: params,
        data: {
          ...data,

          producto: data.producto
            ? {
                connect: data.producto,
              }
            : undefined,
        },
        select: {
          contacto: true,
          createdAt: true,
          email: true,
          id: true,
          nombreProveedor: true,

          producto: {
            select: {
              id: true,
            },
          },

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
  @swagger.ApiOkResponse({ type: Proveedor })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteProveedor(
    @common.Param() params: ProveedorWhereUniqueInput
  ): Promise<Proveedor | null> {
    try {
      return await this.service.deleteProveedor({
        where: params,
        select: {
          contacto: true,
          createdAt: true,
          email: true,
          id: true,
          nombreProveedor: true,

          producto: {
            select: {
              id: true,
            },
          },

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
}
