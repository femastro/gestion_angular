import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
} from 'typeorm';


@Entity()
export class neumaticos {
    
    @PrimaryGeneratedColumn()
    idneumaticos: number;
    
    @Column()
    cod_Articulo: String;
    
    @Column()
    marca: String;

    @Column()
    modelo: String;

    @Column()
    medida: String;
    
    @Column()
    cod_Proveedor: String;
    
}