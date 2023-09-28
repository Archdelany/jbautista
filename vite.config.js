
export default {
 root:'src',
  build: {
    outDir: '../dist',
    
  },

  rollupOptions: {
    input: {
      main: resolve(__dirname, '/dist/index.html')
    },
  },

  server: {
    port: 8080
  }
}