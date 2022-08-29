// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Andrew',
  imageBackground: false,
  openInNewTab: true,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: 'Good morning,',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Go to Sleep,',

  // Layout
  bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

  // Weather
  weatherKey: 'f3d711219fb667759849752c87b33831', // Write here your API Key
  weatherIcons: 'Nord', // 'Onedark', 'Nord', 'Dark', 'White'
  weatherUnit: 'F', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi
  weatherLatitude: '34.366',
  weatherLongitude: '-89.518',

  trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '34.366',
  defaultLongitude: '-89.518',

  // Autochange
  autoChangeTheme: false,

  // Autochabge by OS
  changeThemeByOS: false,

  // Autochange by hour options (24hrs format, string must be in: hh:mm)
  changeThemeByHour: false,
  hourDarkThemeActive: '18:30',
  hourDarkThemeInactive: '07:00',

  // ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
  // ├┴┐│ │ │  │ │ ││││└─┐
  // └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

  firstButtonsContainer: [
    {
      id: '1',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/',
    },
    {
      id: '2',
      name: 'Mail',
      icon: 'send',
      link: 'https://mail.protonmail.com/',
    },
    {
      id: '3',
      name: 'Piped',
      icon: 'youtube',
      link: 'https://piped.kavin.rocks',
    },
    {
      id: '4',
      name: 'Reddit',
      icon: 'arrow-big-up',
      link: 'https://reddit.com',
    },
    {
      id: '5',
      name: 'Search',
      icon: 'search',
      link: 'https://searx.space',
    },
    {
      id: '6',
      name: 'TPB',
      icon: 'skull',
      link: 'https://thepiratebay.org/index.html',
    },
  ],

  secondButtonsContainer: [
    {
      id: '1',
      name: 'Music',
      icon: 'headphones',
      link: 'https://open.spotify.com',
    },
    {
      id: '2',
      name: 'twitter',
      icon: 'twitter',
      link: 'https://twitter.com/',
    },
    {
      id: '3',
      name: 'bot',
      icon: 'bot',
      link: 'https://discord.com/app',
    },
    {
      id: '4',
      name: 'Amazon',
      icon: 'shopping-bag',
      link: 'https://amazon.com/',
    },
    {
      id: '5',
      name: 'Hashnode',
      icon: 'pen-tool',
      link: 'https://hashnode.com/',
    },
    {
      id: '6',
      name: 'Figma',
      icon: 'figma',
      link: 'https://figma.com/',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  // First Links Container
  firstlistsContainer: [
    {
      icon: 'ghost',
      id: '1',
      links: [
        {
          name: 'Lo-Fi',
          link: 'https://www.youtube.com/watch?v=jfKfPfyJRdk',
        },
        {
          name: 'Radiohead',
          link: 'https://www.youtube.com/watch?v=TnvzakAqlPM',
        },
        {
          name: 'The Smiths',
          link: 'https://www.youtube.com/watch?v=3RSt0QbxPGI',
        },
        {
          name: 'Sadness',
          link: 'https://www.youtube.com/watch?v=pkSyBkk99VE',
        },
      ],
    },
    {
      icon: 'terminal',
      id: '2',
      links: [
        {
          name: 'Mullvad',
          link: 'https://mullvad.net/en/check',
        },
        {
          name: 'Device Info',
          link: 'https://deviceinfo.me/#',
        },
        {
          name: 'Arch Wiki',
          link: 'https://wiki.archlinux.org/',
        },
        {
          name: 'BrowserLeaks',
          link: 'https://browserleaks.com/',
        },
      ],
    },
  ],

  // Second Links Container
  secondListsContainer: [
    {
      icon: 'binary',
      id: '1',
      links: [
        {
          name: 'Spotify',
          link: 'https://www.spotify.com',
        },
        {
          name: 'Reddit',
          link: 'https://www.reddit.com',
        },
        {
          name: 'Hashnode',
          link: 'https://www.hashnode.com',
        },
        {
          name: 'Pocket',
          link: 'https://www.pocket.com',
        },
      ],
    },
    {
      icon: 'github',
      id: '2',
      links: [
        {
          name: 'Front',
          link: 'https://www.reddit.com/r/Frontend/',
        },
        {
          name: 'Rust',
          link: 'https://www.reddit.com/r/rust/',
        },
        {
          name: 'Go',
          link: 'https://www.reddit.com/r/golang/',
        },
        {
          name: 'Repos',
          link: 'https://github.com/migueravila',
        },
      ],
    },
  ],
};
