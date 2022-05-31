import { EmailRepository, EmailCreateData } from '../email-repository'
import { prisma } from '../../prisma';



export class PrismaEmailRepository implements  EmailRepository {
    async create({name, email, subject, message}: EmailCreateData){
        await prisma.email.create({
            data: {
                name,
                email,
                subject,
                message
            }
        })
    };
}