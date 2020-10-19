const recipient = 'bma+prnsn-contact-form@makina-corpus.com';

export const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiZkVLZjZScUNnblQ3OTZMdk5lSTRHeXRadDA0VTkwNU1qQWdVRU1RZndHcz0iLCJkZWZpbml0aW9uIjoiTk1Fbnl5Z3pkd0wvK3YvS0pKNWR5anlKWnBvR0xsTWxvVjNJRTRkaXdpdz0iLCJ0eXBlIjoiY29sbGVjdCJ9.GhggcJ1D87LeqZsklZQIWJDYRMD2c_nIiIHlAaAXDH8';

export const definition = {
  epilogue: { title: 'Merci pour votre message.' },
  clusters: [{
    id: 'ff6e14c3511b7fda1b283815403c03fefd27b4f27a11d791d3b66a1ffbabce96',
    name: 'Formulaire contact',
    nodes: [
      {
        id: 'd08272afb6963b19cdbd95f2a69b4904237e1473883fb0174df9bfe33b15d222',
        name: 'Nom',
        nameVisible: true,
        slots: [{ id: '30d0c843ae667c9bb53bb9bac503bbca663041c4cd0abadd21aa88adbe1e2801', type: 'text', kind: 'static', reference: 'value', label: 'Text' }],
        block: { type: 'tripetto-block-text', version: '3.0.3' },
      },
      {
        id: '561bd91c88f82e307c5c96047588da62bcbdd65250194cc1a5c8b05fb8970cea',
        name: 'Prénom',
        nameVisible: true,
        slots: [{ id: '602e5804416651e4d56880f9be10a067cf8a55ab1f39efb1f16e4161bdb5883a', type: 'text', kind: 'static', reference: 'value', label: 'Text' }],
        block: { type: 'tripetto-block-text', version: '3.0.3' },
      },
      {
        id: '550080ea37ebc9dfca48a7adda8517084bde0c62132d999907a3962809ac8087',
        name: 'E-mail',
        nameVisible: true,
        description: '',
        slots: [{ id: '9985442539b85046379bc0b3b12cb38a2a33d99cad7ebf461a0fbfd9957f0558', type: 'string', kind: 'static', reference: 'email', label: 'Email address', required: true }],
        block: { type: 'tripetto-block-email', version: '3.1.0' },
      },
      {
        id: '8653f51cc71df5800e652c5c18417c909e86a59766c349668f47132e381246b4',
        name: 'Votre message',
        nameVisible: true,
        slots: [{ id: 'd5d398ad29e7a38c7d8489bda9403768245915b228de6db3fd01053fd8a4b61e', type: 'text', kind: 'static', reference: 'value', label: 'Multi-line text', alias: 'Message' }],
        block: { type: 'tripetto-block-textarea', version: '3.0.3' },
      },
      {
        id: 'eaec8e65c8805e6cb74e7c2cd58aecdef543be84e88fea3a158c110f84167779',
        name: 'Formulaire contact OutdoorVision',
        description: '',
        slots: [
          { id: 'e82756ed39ab646b8dcea9d8216d5228af95c467a2eac191b311b22a7bd10d8d', type: 'string', kind: 'static', reference: 'recipient', label: 'Recipient', actionable: true },
          { id: '1d519c52185830fd6479801ed3e8f6aa643fa57007df00961845b91496b2cac1', type: 'string', kind: 'static', reference: 'subject', label: 'Subject', actionable: true },
          { id: 'b370389b8257e327db2f11e0e2397bcff68f07bb197bcc3af75d876fe04900d2', type: 'text', kind: 'static', reference: 'message', label: 'Message', actionable: true },
          { id: 'd93b5e46b1aff45ff314cbd456704911100684c17353ec290c7ce5a025e7aec7', type: 'boolean', kind: 'static', reference: 'data', label: 'Data', pipeable: false, exportable: false, actionable: true },
          { id: 'a9152f965baa41013d5a44a41804d5612e4573a9aa0d7b3b9c0dbaa3d882ca1c', type: 'string', kind: 'static', reference: 'sender', label: 'Sender', actionable: true },
        ],
        block: {
          type: 'tripetto-block-mailer',
          version: '2.1.2',
          recipient: 'fixed',
          recipientFixed: recipient,
          sender: '9985442539b85046379bc0b3b12cb38a2a33d99cad7ebf461a0fbfd9957f0558',
          includeData: true,
        },
      },
    ],
  }],
  builder: { name: 'tripetto', version: '2.2.3' },
};

export const styles = {
  mode: 'progressive',
  autoFocus: false,
  showEnumerators: false,
  showPageIndicators: false,
  showProgressbar: false,
  noBranding: true,
  contract: { name: 'tripetto-runner-classic', version: '1.7.1' },
  color: '#96BB37',
};
