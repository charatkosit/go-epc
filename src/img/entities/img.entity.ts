/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Img {
  @PrimaryGeneratedColumn()
  img_id: number;

  @Column()
  img_partNumber: string;

  @Column()
  img_aliasName: string;

  @Column()
  img_comment: string;

}
