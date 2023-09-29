import Brevo from '@getbrevo/brevo';

const parse = data => {
  try {
    return JSON.parse(data);
  } catch (err) {
    console.error(err);
    return false;
  }
}

export const handler = async (event, context) => {
  const { body } = event;

  // Reject everything but POST

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405 };
  }

  // Check message validity

  const parsedBody = parse(body);

  if (!parsedBody) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Unable to parse data" }),
    };
  }

  if (!parsedBody['E-mail'] || !parsedBody['Message']) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Missing E-mail or Message" }),
    };
  }

  // Prepare Brevo (Sendinblue) email API

  const defaultClient = Brevo.ApiClient.instance;
  const apiKey = defaultClient.authentications['api-key'];
  apiKey.apiKey = process.env.BREVO_API_TOKEN;

  const apiInstance = new Brevo.TransactionalEmailsApi();

  // Build outgoing transac email

  const sendSmtpEmail = new Brevo.SendSmtpEmail();

  sendSmtpEmail.to = [{
    email: process.env.BREVO_EMAIL_TO
  }];
  sendSmtpEmail.replyTo = {
    email: parsedBody['E-mail'],
    name: `${parsedBody['Prénom']} ${parsedBody['Nom']}`,
  };
  sendSmtpEmail.sender = { email: 'contact@outdoorvision.fr' };
  sendSmtpEmail.subject = 'Formulaire contact OutdoorVision';

  sendSmtpEmail.textContent = [
    'Nom :',
    parsedBody['Nom'],
    '',
    'Prénom :',
    parsedBody['Prénom'],
    '',
    'Email :',
    parsedBody['E-mail'],
    '',
    'Message :',
    parsedBody['Message'],
  ].join('\n');

  // Send email

  try {
    const response = await apiInstance.sendTransacEmail(sendSmtpEmail);

    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (err) {
    console.error(err);

    return {
      statusCode: 500,
      body: JSON.stringify({ message: err?.error?.text }),
    };
  }
};

export default handler;