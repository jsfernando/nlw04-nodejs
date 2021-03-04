import { Column, Entity, PrimaryColumn, CreateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

//decorator
// habilitar tsconfig.js - documentação do typeorm
//
// "experimentalDecorators": true,              /* Enables experimental support for ES7 decorators. */
// "emitDecoratorMetadata": true,               /* Enables experimental support for emitting type metadata for decorators. */
// "strictPropertyInitialization": false,        /* Enable strict checking of property initialization in classes. */

@Entity("users")
class User {
    @PrimaryColumn()
    readonly id: string;
  
    @Column()
    name: string;
  
    @Column()
    email: string;
  
    @CreateDateColumn()
    created_at: Date;
  
    constructor() { // se o uuid não existir, tenha o valor de uuid() da biblioteca
      if (!this.id) {
        this.id = uuid();
      }
    }
  
}

export { User }