import { profile } from "@/data/site";

export function ContactLinks({ showLabels = false }: { showLabels?: boolean }) {
  const contacts = [
    {
      label: "Email",
      href: profile.email ? "mailto:" + profile.email : "",
      icon: (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="19" height="19">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 6 9 7 9-7" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: profile.linkedin,
      icon: (
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" width="19" height="19">
          <path d="M5.1 3a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2ZM3.3 9h3.6v12H3.3V9Zm6 0h3.4v1.6h.1c.5-.9 1.6-1.9 3.3-1.9 3.5 0 4.2 2.3 4.2 5.3v7h-3.6v-6.2c0-1.5 0-3.3-2-3.3s-2.3 1.6-2.3 3.2V21H9.3V9Z" />
        </svg>
      ),
    },
  ];
  return (
    <div className="contact-links">
      {contacts.filter((contact) => contact.href).map((contact) => (
        <a key={contact.label} href={contact.href} aria-label={contact.label}>
          {contact.icon}
          {showLabels && <span>{contact.label}</span>}
        </a>
      ))}
    </div>
  );
}
