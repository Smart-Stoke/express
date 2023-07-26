import { RoleType } from 'types/role.type';
import { BaseDocument } from './base.document';

export interface UserDocument extends BaseDocument {
  name: string;
  email: string;
  password: string;
  role: RoleType;
  isEmailVerified: boolean;
}
