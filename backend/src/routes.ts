import express from 'express';
import { SubmitEmailUseCase } from './use-cases/submit-email-use-case';
import { PrismaEmailRepository } from './repositories/prisma/prisma-email-repository'
import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter'

const routes = express.Router()

export default routes.post('/emails', async (req, res) => {
    const { name, email, subject, message } = req.body
    
    const prismaEmailRepository = new PrismaEmailRepository()
    const nodemailerAdapter = new NodemailerMailAdapter()

    const submitEmailUseCase = new SubmitEmailUseCase(
        prismaEmailRepository,
        nodemailerAdapter
    )
    await submitEmailUseCase.execute(
        {
            name,
            email,
            subject,
            message
        }
    )

    return res.status(201).send()
})