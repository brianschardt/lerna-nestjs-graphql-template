import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BaseEntity,
} from 'typeorm';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

@Entity('User')
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  userKey: number;

  @Column({
    type: 'text',
    unique: true,
  })
  email: string;

  @Column('text')
  password: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  firstName: string;

  @Column({
    type: 'text',
    nullable: true,
  })
  lastName: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  async comparePassword(attempt: string): Promise<boolean> {
    return bcrypt.compare(attempt, this.password);
  }

  get token(): string {
    const { userKey, email } = this;

    return jwt.sign(
      {
        userKey,
        email,
      },
      'asdf',
      { expiresIn: '7d' }
    );
  }
}
