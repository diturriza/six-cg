import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: getPermalink('/'),
    }, {
      text: 'Sobre nosotros',
      href: getPermalink('/nosotros'),
    },
    {
      text: 'Servicios',
      href: getPermalink('/servicios'),
    },
    {
      text: 'Casos de éxito',
      href: getPermalink('/servicios'),
    },
    {
      text: 'Contáctanos',
      href: getPermalink('/contacto'),
    },

  ],
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
      links: [
        { text: 'Nosotros', href: getPermalink('/nosotros') },
        { text: 'Servicios', href: getPermalink('/servicios') },
        { text: 'Casos de éxito', href: getPermalink('/casos-exito') },
        { text: 'Contacto', href: getPermalink('/contacto') },
      ],
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
