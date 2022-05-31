"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaEmailRepository = void 0;
const prisma_1 = require("../../prisma");
class PrismaEmailRepository {
    async create({ name, email, subject, message }) {
        await prisma_1.prisma.email.create({
            data: {
                name,
                email,
                subject,
                message
            }
        });
    }
    ;
}
exports.PrismaEmailRepository = PrismaEmailRepository;
