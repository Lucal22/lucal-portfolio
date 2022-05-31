import { MailAdapter } from '../adapters/mail-adapter';
import { EmailRepository } from '../repositories/email-repository'

interface SubmitEmailUseCaseRequest{
    name?: string;
    email: string;
    subject?: string;
    message: string;
}


export class SubmitEmailUseCase {
    constructor(
      private  emailRepository: EmailRepository, 
      private mailAdapter: MailAdapter,
    ){}



    async execute(request :SubmitEmailUseCaseRequest){
        const { name, email, subject, message } = request;

        if(!message || !email){
            throw new Error('Message and email are required')
        }

        await this.emailRepository.create({
            name,
            email,
            subject,
            message
        })

        await this.mailAdapter.sendMail({
            subject:'Portfolio-Novo Email',
            body: [
                `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
                name?`<p>Nome:${name}</p>`:'<p>Nome: Não informado</p>',
                `<p>Email: ${email}</p>`,
                subject?`<p>Assunto: ${subject}</p>`:'',
                `<p>${message}</p>`,
                `</div>`,
            ].join('\n')
        })
    }
}