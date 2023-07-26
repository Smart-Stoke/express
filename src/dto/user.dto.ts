import { UserDocument } from 'documents';
import { RoleType } from 'types/role.type';
import { BaseDto } from './base.dto';

export class UserDto extends BaseDto {
  id: string;
  name: string;
  email: string;
  password: string;
  role: RoleType;
  isEmailVerified: boolean;
  public static convertDocToDto(userDoc: UserDocument): UserDto {
    delete userDoc.__v;
    const { _id, ...user } = userDoc;
    const id = _id;
    return { ...user, id };
  }
}
