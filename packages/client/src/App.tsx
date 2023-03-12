import { defineComponent } from 'vue'
import Root from './views/HomeView'

const App = defineComponent({
  setup() {
    return () => (
      <div>
        <header class="header"> HELLO VUE.JS</header>
        <main>
          <Root />
        </main>
      </div>
    )
  }
})

export default App
