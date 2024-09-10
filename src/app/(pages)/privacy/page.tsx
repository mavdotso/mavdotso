import ReactMarkdown from 'react-markdown';

const privacyPolicyContent = `
# Privacy Policy

Last updated: Sept 10 2024

Mavdotso ("us", "we", or "our") operates the "Services". This page informs you of our policies regarding the collection, use, and disclosure of Personal Information when you use our Services.

## Information Collection and Use

While using our Services, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to:

- Email address
- First name and last name (or username)
- Country of residence

## How We Use Your Information

We use the collected data for various purposes:

- To provide and maintain our Services
- To notify you about changes to our Services
- To allow you to participate in interactive features of our Services when you choose to do so
- To provide customer support
- To gather analysis or valuable information so that we can improve our Services
- To monitor the usage of our Services
- To detect, prevent and address technical issues
- To provide you with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless you have opted not to receive such information

## Data Storage

Your information, including Personal Information, is stored on our servers. We will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy.

## Security

The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, including encryption, we cannot guarantee its absolute security.

## International Transfer

Your information, including Personal Information, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those from your jurisdiction.

If you are located outside The United States and choose to provide information to us, please note that we transfer the data, including Personal Information, to The United States and process it there.

Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.

## Changes to This Privacy Policy

We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.

We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.

You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.

## Contact Us

If you have any questions about this Privacy Policy, please contact us:

- By email: privacy[at]mav.so
- By visiting this page on our website: https://mav.so
`;

export default function PrivacyPolicy() {
    return (
        <div className="mx-auto px-4 py-8 container">
            <ReactMarkdown>{privacyPolicyContent}</ReactMarkdown>
        </div>
    );
}