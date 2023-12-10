import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types, Schema as MSchema } from 'mongoose';
import { Product } from '../../product/model/product.model';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop({ unique: true })
  email: string;
  
  @Prop()
  passwordHash: string;
}

export const UserSchema = SchemaFactory.createForClass(User);