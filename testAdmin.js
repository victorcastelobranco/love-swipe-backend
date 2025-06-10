const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


//testing admin logging in
async function testAdmin() {
  const admin = await prisma.admin.findMany();
  console.log('Admins found:', admin);
}

testAdmin()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());