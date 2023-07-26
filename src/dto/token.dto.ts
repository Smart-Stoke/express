import { TokenDocument } from 'documents';
import { ObjectId } from 'mongoose';
import { TokenTypes } from 'types/tokenTypes.enum';
import { BaseDto } from 'dto';

export class TokenDto extends BaseDto {
  id: string;
  token: string;
  user: ObjectId;
  type: TokenTypes;
  expires: Date;
  blacklisted: boolean;
  public static convertDocToDto(tokenDoc: TokenDocument): TokenDto {
    delete tokenDoc.__v;
    const { _id, ...token } = tokenDoc;
    const id = _id;
    return { ...token, id };
  }
}
