import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  displayName: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  bio: string;

  @Column()
  tags: string;

  @Column()
  gender: string;

  @Column()
  dateOfBirthday: string;

  @Column()
  location: string;

  @Column()
  photo: string;
}
