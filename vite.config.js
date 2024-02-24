import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
	base:'/v47-tier2-team-13/client',
	plugins: [react()],
})
