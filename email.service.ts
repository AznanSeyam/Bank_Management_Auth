import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter = nodemailer.createTransport({
    port: parseInt(process.env.SMTP_PORT, 10),
    secure: false,
    auth: {
     
    },
    tls: {
    },
  });

  async sendRegistrationEmail(userEmail: string, userName: string) {
    await this.transporter.sendMail({
      from: `"TrustOne Bank" <${process.env.EMAIL_USER}>`,
      to: userEmail, // 
      subject: 'Welcome to TrustOne Bank',
      text: `Hello ${userName},\n\nYour account has been successfully registered.\n\nThank you!`,
    });
  }
}
