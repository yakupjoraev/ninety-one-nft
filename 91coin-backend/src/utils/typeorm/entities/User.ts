import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn({type: 'bigint'})
    id: number;

    @Column({ unique: true })
    email: string;

    @Column({ nullable: true })
    emailVerificationCode: string;

    @Column({ nullable: true })
    emailVerifiedAt: Date;

    @Column({ nullable: true, unique: true })
    phone: string;

    @Column({ nullable: true })
    phoneVerificationCode: string;

    @Column({ nullable: true })
    phoneVerifiedAt: Date;

    @Column({ nullable: true })
    referrer: string;

    @Column({ default: 'inactive' })
    status: string;

    @Column()
    createdAt: Date;
}