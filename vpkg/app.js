import { createApp, h, onMounted } from '@histoire/vendors/vue'
import { CompSlot } from 'vpkg2'

const app = createApp({
  setup () {
    onMounted(() => {
      console.log('mounted 2')
    })
  },
  render: () => h(CompSlot, null, {
    default: ({ color }) => h('div', `Hello World 2, ${color}`)
  })
})

app.mount('#app2')
