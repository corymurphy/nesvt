import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// const path = require('path')

// export default {
//   root: path.resolve(__dirname, 'src'),
//   server: {
//     port: 8080,
//     hot: true
//   }
// }

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
