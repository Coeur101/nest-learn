const customConfig: Record<string, any> = {
  uploads: {
    type: [
      '.png',
      ".jpg",
      '.jpeg'
    ]
  }
}
const config = {
  ...customConfig
}
export { config }
