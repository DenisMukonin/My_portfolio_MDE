export default defineAppConfig({
  global: {
    picture: {
      dark: '/profile/my.png',
      light: '/profile/my.png',
      alt: 'Моя фотография'
    },
    available: true
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `Frontend разработчик Муконин Денис • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'i-mdi-email',
      'to': 'mailto:dezmukonin16@gmail.com',
      'target': '_blank',
      'aria-label': 'Email '
    }, {
      'icon': 'i-mdi-telegram',
      'to': 'https://t.me/dezMukonin',
      'target': '_blank',
      'aria-label': 'Telegram'
    }, {
      'icon': 'i-mdi-github',
      'to': 'https://github.com/DenisMukonin',
      'target': '_blank',
      'aria-label': 'Dez on GitHub'
    }]
  }
})
