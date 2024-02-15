const { PrismaClient } = require("@prisma/client");

/**
 * Base de datos utilizada en la aplicación.
 * @type {PrismaClient}
 */
export const db = globalThis.db || new PrismaClient();

if(process.env.NODE_ENV !== 'development'){
  globalThis.db = db;
}