module.exports = {
  main: {
    name: 'How to live',
    basePath: 'https://raw.githubusercontent.com/reymon359/how-to-live/master/docs/', // To work with GitHub Pages
    repo: 'https://github.com/reymon359/how-to-live',
    loadSidebar: true,
    alias: {
      '/.*/_sidebar.md': '/_sidebar.md'
    },
    subMaxLevel: 3,
    sidebarDisplayLevel: 1,
    search: 'auto'
  },
}