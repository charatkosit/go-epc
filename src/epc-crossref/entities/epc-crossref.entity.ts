/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class EpcCrossref {
  @PrimaryGeneratedColumn()
  crf_id: number;

  @Column()
  crf_partid: string;

  @Column()
  crf_pnc: string;
  @Column()
  crf_count: number;

  @Column()
  crf_cat: string;

  @Column()
  crf_model: string;

  @Column()
  crf_year: string;

  @Column()
  crf_details: string;

}
