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
import { CommentWhereInput } from "./CommentWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CommentListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CommentWhereInput,
  })
  @ValidateNested()
  @Type(() => CommentWhereInput)
  @IsOptional()
  @Field(() => CommentWhereInput, {
    nullable: true,
  })
  every?: CommentWhereInput;

  @ApiProperty({
    required: false,
    type: () => CommentWhereInput,
  })
  @ValidateNested()
  @Type(() => CommentWhereInput)
  @IsOptional()
  @Field(() => CommentWhereInput, {
    nullable: true,
  })
  some?: CommentWhereInput;

  @ApiProperty({
    required: false,
    type: () => CommentWhereInput,
  })
  @ValidateNested()
  @Type(() => CommentWhereInput)
  @IsOptional()
  @Field(() => CommentWhereInput, {
    nullable: true,
  })
  none?: CommentWhereInput;
}
export { CommentListRelationFilter as CommentListRelationFilter };
