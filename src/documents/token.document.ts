import { BaseDocument } from 'documents/base.document';
import { ObjectId } from 'mongoose';
import { TokenTypes } from 'types/tokenTypes.enum';

export interface TokenDocument extends BaseDocument {
  token: string;
  user: ObjectId;
  type: TokenTypes;
  expires: Date;
  blacklisted: boolean;
}
