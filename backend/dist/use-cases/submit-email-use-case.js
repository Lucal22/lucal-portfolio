"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmitEmailUseCase = void 0;
class SubmitEmailUseCase {
    constructor(emailRepository, mailAdapter) {
        this.emailRepository = emailRepository;
        this.mailAdapter = mailAdapter;
    }
    async execute(request) {
        const { name, email, subject, message } = request;
        if (!message || !email) {
            throw new Error('Message and email are required');
        }
        await this.emailRepository.create({
            name,
            email,
            subject,
            message
        });
        await this.mailAdapter.sendMail({
            subject: 'Novo Email',
            body: [
                `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
                name ? `<p>Nome:${name}</p>` : '<p>Nome: Não informado</p>',
                `<p>Email: ${email}</p>`,
                subject ? `<p>Assunto: ${subject}</p>` : '',
                `<p>${message}</p>`,
                `</div>`,
            ].join('\n')
        });
    }
}
exports.SubmitEmailUseCase = SubmitEmailUseCase;
