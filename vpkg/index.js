import { createRequire } from 'module'
import fs from 'fs-extra'

const require = createRequire(import.meta.url)

const importVue = () => {
  // @TODO toggle this to reproduce the error or fix it with a re-export relative file
  return require.resolve('@histoire/vendors/vue')
  // return require.resolve('./re-export')
}

fs.ensureDirSync('node_modules/.generated')
fs.writeFileSync('node_modules/.generated/app.js', `import { createApp, h, onMounted } from '${importVue()}'
import { CompSlot } from '${require.resolve('vpkg2')}'

const app = createApp({
  setup () {
    onMounted(() => {
      console.log('mounted 3')
    })
  },
  render: () => h(CompSlot, null, {
    default: ({ color }) => h('div', \`Hello World 3, \${color}\`)
  })
})

app.mount('#app3')`)

export default () => ({
  name: 'virtual-app',

  resolveId (id) {
    if (id === 'virtual:vapp') {
      return `\0virtual:vapp`
    }

    if (id === 'generated-app') {
      return 'node_modules/.generated/app.js'
    }
  },

  load (id) {
    if (id === '\0virtual:vapp') {
      return `import { createApp, h, onMounted } from '${importVue()}'
      import { CompSlot } from '${require.resolve('vpkg2')}'

      const app = createApp({
        setup () {
          onMounted(() => {
            console.log('mounted')
          })
        },
        render: () => h(CompSlot, null, {
          default: ({ color }) => h('div', \`Hello World 1, \${color}\`)
        })
      })
      
      app.mount('#app')`
    }
  }
})
