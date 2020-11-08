import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    codArticulo: string;

    @Column()
    marca: string;

    @Column()
    modelo: string;

    @Column()
    medida: string;

    @Column()
    codProveedor: string;

}

