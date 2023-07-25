import { IsOptional, IsString, Validate } from 'class-validator';
import { IsUniqueConstraint } from '../../shared/validation/is-unique-constraint';
import { IsUnique } from '../../shared/validation/is-unique';

export class CreateUserDto {
  @IsString()
  //   @Validate(IsUniqueConstraint)
  @IsUnique({ tableName: 'user', column: 'username' })
  username: string;

  @IsString()
  @IsOptional()
  firstName: string;

  @IsOptional()
  @IsString()
  lastName: string;
}
