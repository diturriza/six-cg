import { getPermalink } from './utils/permalinks';

const sitemap = [
  { text: 'Inicio', href: getPermalink('/') },
  { text: 'Nosotros', href: getPermalink('/nosotros') },
  { text: 'Servicios', href: getPermalink('/servicios') },
  { text: 'Contacto', href: getPermalink('/contacto') },
];

export const headerData = {
  links: sitemap,
  actions: [{ text: 'Solicita Asesoría', href: getPermalink('/contacto'), target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: '',
      links: []
    },
    {
      title: '',
      links: []
    },
    {
      title: 'Política de Privacidad - Colombia',
      links: [
        { text: 'Política de Tratamiento de Datos Personales', href: getPermalink('/politica-tratamiento-datos-personales') },
        { text: 'Aviso de Privacidad', href: getPermalink('/aviso-privacidad') },
      ]
    },
    {
      title: 'Sitemap',
      links: sitemap,
    },
  ],
  secondaryLinks: [],
  socialLinks: [
    { ariaLabel: 'Linkedin', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/six-cg/' },
  ],
  footNote: `
    Copyright 2024 · All rights reserved.
  `,
};
