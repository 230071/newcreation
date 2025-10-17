import { FaXTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa6';

interface ContactPerson {
  name: string;
  phones: string[];
}

interface BranchProps {
  title: string;
  contacts: ContactPerson[];
}

const Branch = ({ title, contacts }: BranchProps) => (
  <div className="space-y-6">
    <h2 className="text-lg md:text-xl font-bold text-gray-900 uppercase tracking-wide">
      {title}
    </h2>
    <div className="space-y-6">
      {contacts.map((contact, index) => (
        <div key={index} className="space-y-2">
          <p className="text-gray-900 font-medium text-sm md:text-base">
            {contact.name}
          </p>
          {contact.phones.map((phone, phoneIndex) => (
            <a
              key={phoneIndex}
              href={`tel:${phone}`}
              className="block text-gray-700 text-sm md:text-base hover:text-blue-600 transition-colors"
            >
              {phone}
            </a>
          ))}
        </div>
      ))}
    </div>
  </div>
);

const ContactPage = () => {
  const adjumaniContacts: ContactPerson[] = [
    {
      name: "PR. GEORGE M BUSH :",
      phones: ["+256771638254/", "+256784132969"]
    },
    {
      name: "AP. JONATHAN :",
      phones: ["+256781046721"]
    }
  ];

  const moyoContacts: ContactPerson[] = [
    {
      name: "PR. MAZINGA :",
      phones: ["+256761047537/", "+256773206126"]
    },
    {
      name: "PR. DOMINIC :",
      phones: ["+256781363057"]
    }
  ];

  const socialLinks = [
    { icon: FaXTwitter, href: "https://twitter.com", label: "Twitter" },
    { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
    { icon: FaYoutube, href: "https://youtube.com", label: "YouTube" },
    { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" }
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 py-16 px-6 md:px-12 lg:px-24 mt-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-xl md:text-3xl font-bold text-gray-900">
            Contact Us
          </h1>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Adjumani District Branches */}
          <Branch 
            title="Adjumani District Branches" 
            contacts={adjumaniContacts}
          />

          {/* Moyo District Branches */}
          <Branch 
            title="Moyo District Branches" 
            contacts={moyoContacts}
          />

          {/* Socials */}
          <div className="space-y-6">
            <h2 className="text-lg md:text-xl font-bold text-gray-900 uppercase tracking-wide">
              Socials
            </h2>
            <div className="flex gap-4 items-center">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-900 text-white hover:bg-gray-700 transition-colors"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;