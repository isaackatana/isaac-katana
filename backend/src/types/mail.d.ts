declare module 'nodemailer' {
    interface MailOptions {
      from: string;
      to: string;
      subject: string;
      text: string;
      html?: string;
    }

    export function createTransport(arg0: { service: string; auth: { user: string | undefined; pass: string | undefined; }; }) {
        throw new Error('Function not implemented.');
    }
  }
  