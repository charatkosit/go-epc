/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Epc {
  @PrimaryGeneratedColumn()
  epc_id: number;

  @Column()
  epc_partid: string;

  @Column()
  epc_partdesc: string;

}
