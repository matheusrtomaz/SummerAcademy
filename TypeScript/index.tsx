const name: string = "John Doe";
const idade: number = 30;
const ativo: boolean = false;

const name = "John Doe";
const idade = 30;
const ativo = false;

--------------------------------------------

INTERFACES
interface IUser {
  name: string;
  idade: number;
  ativo: boolean;
}

const user: IUser = {
  name: "John Doe",
  idade: 30,
  ativo: false, 
}

--------------------------------------------

TYPES
type IUser {
  name: string;
  idade: number;
  active: boolean;
}

const user: IUser = {
  name: "John Doe",
  idade: 30,
  active: true, 
}

--------------------------------------------

type User = {
  name: string;
}

const user: User = {
  name: "John Doe",
}

// ESTUDAR SOBRE INTERFACE E TIPOS

--------------------------------------------

// INTERFACE COMEÇA COM I
// EXEMPLO:
inferface IUser {
 create(user: User): void;

 class CreateUser implements IUser {

 }
}

--------------------------------------------

enum PERFIL {
  ADMIN = "ADMIN",
  CUSTOM = "CUSTOM",
}

const user = {
  name: "John Doe",
  perfil: PERFIL.ADMIN,
  active: true,
}

--------------------------------------------

