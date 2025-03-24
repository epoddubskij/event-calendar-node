import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Upload } from './Upload';

@Entity('events')
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamptz', nullable: false })
  start_date: Date;

  @Column({ type: 'timestamptz', nullable: false })
  end_date: Date;

  @Column('boolean', { nullable: true, default: false })
  recurring: boolean;

  @Column({nullable: true})
  RRULE: string;

  @Column({ type: 'timestamptz', nullable: true })
  STDATE: Date;

  @Column({ type: 'timestamptz', nullable: true })
  DTEND: Date;
  
  @Column({nullable: true})
  recurringEventId: number;

  @Column({ type: 'timestamptz', nullable: true })
  originalStartTime: Date;
  
  @Column({nullable: true})
  status: string;
  
  @Column('boolean', { nullable: true, default: false })
  allDay: boolean;
  
  @Column({nullable: true})
  type: number;
  
  @Column({nullable: true})
  text: string;
  
  @Column({nullable: true})
  details: string;

  @OneToMany(() => Upload, upload => upload.event, { 
    cascade: true,
    eager: true,
    nullable: true,
  })
  files: Upload[];
}