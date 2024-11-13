/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  IsNumber,
  Min,
  Max,
  ValidateNested,
  IsInt,
} from "class-validator";
import { ProveedorCreateNestedManyWithoutProductosInput } from "./ProveedorCreateNestedManyWithoutProductosInput";
import { Type } from "class-transformer";

@InputType()
class ProductoCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  descripcion?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  nombreProducto?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  precioUnitario?: number | null;

  @ApiProperty({
    required: false,
    type: () => ProveedorCreateNestedManyWithoutProductosInput,
  })
  @ValidateNested()
  @Type(() => ProveedorCreateNestedManyWithoutProductosInput)
  @IsOptional()
  @Field(() => ProveedorCreateNestedManyWithoutProductosInput, {
    nullable: true,
  })
  proveedors?: ProveedorCreateNestedManyWithoutProductosInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  stock?: number | null;
}

export { ProductoCreateInput as ProductoCreateInput };
