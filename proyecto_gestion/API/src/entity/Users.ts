import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

import * as bcrypt from 'bcryptjs';

@Entity()
export class Users {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    role: string;

    hashPassword(): void {
        const salt = bcrypt.genSaltSync(10);
        this.password = bcrypt.hashSync(this.password, salt);
    }
    
    checkPassword(password: string): boolean {
        return bcrypt.compareSync(password, this.password);
    }

}
