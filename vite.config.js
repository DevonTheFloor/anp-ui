import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    open: 'index.html'
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "/src/sass/variables.scss";
          @import "/src/sass/mixins.scss";
`
      }
    }
  },
  
})

