import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter = nodemailer.createTransport({
    auth: {
    },
  });

  async sendRegistrationEmail(userEmail: string, userName: string) {
    await this.transporter.sendMail({
    });
  }
}
