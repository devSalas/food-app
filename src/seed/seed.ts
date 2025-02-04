import { PrismaClient } from "@prisma/client";
import { EncryptPassword } from "../utils/bcrypt/EncryptPassword";
const prisma = new PrismaClient();
export default prisma;



async function main() {

    const adminRol = await prisma.rol.create({
        data:{
            name:"admin"
        }
    })
    const clientRol = await prisma.rol.create({
        data:{
            name:"client"
        }
    })

    const password="12345678";

    const passwordEncrypt = await EncryptPassword({ password });

    // Crear usuarios de ejemplo
    const user = await prisma.user.create({
        data: {
          address:'no definido',
          email:'esteban@gmail.com',
          password: passwordEncrypt,
          name:'esteban salas',
          image:'',
          rol_id: 1,
        },
      }); 

   


    console.log({ user});
}

main()
    .catch(e => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    }); 