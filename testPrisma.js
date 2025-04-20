const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log("🔥 Step 1: Prisma client connected");

  try {
    const users = await prisma.user.findMany();
    console.log("✅ Users:", users);
  } catch (err) {
    console.error("❌ Prisma error:", err.message);
  } finally {
    await prisma.$disconnect(); // clean disconnect
  }
}

// ✅ Actually run it
main();