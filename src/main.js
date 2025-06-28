import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// Import global components
import SectionContainer from './components/SectionContainer.vue'
import SectionFull from './components/SectionFull.vue'

const app = createApp(App)

// Register global components
app.component('SectionContainer', SectionContainer)
app.component('SectionFull', SectionFull)

app.mount('#app')
