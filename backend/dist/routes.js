"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const submit_email_use_case_1 = require("./use-cases/submit-email-use-case");
const prisma_email_repository_1 = require("./repositories/prisma/prisma-email-repository");
const nodemailer_mail_adapter_1 = require("./adapters/nodemailer/nodemailer-mail-adapter");
const routes = express_1.default.Router();
exports.default = routes.post('/emails', async (req, res) => {
    const { name, email, subject, message } = req.body;
    const prismaEmailRepository = new prisma_email_repository_1.PrismaEmailRepository();
    const nodemailerAdapter = new nodemailer_mail_adapter_1.NodemailerMailAdapter();
    const submitEmailUseCase = new submit_email_use_case_1.SubmitEmailUseCase(prismaEmailRepository, nodemailerAdapter);
    await submitEmailUseCase.execute({
        name,
        email,
        subject,
        message
    });
    return res.status(201).send();
});
