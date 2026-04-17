import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter = nodemailer.createTransport({
    auth: {
    },
    tls: {
  });

  async sendRegistrationEmail(userEmail: string, userName: string) {
    await this.transporter.sendMail({
    });
  }
}
