import { defineComponent } from 'vue'
import ToggleDark from './components/dark'
import Header from './components/header.vue'
import Root from './views/HomeView'

const App = defineComponent({
  setup() {
    return () => (
      <>
        <Header />
        <main class="flex-1 mt-20">
          <Root />
          <div class="text-9xl text-black text-center dark:bg-black dark:text-white">
            <div>HELLO WORLD</div>
            <div>HELLO WORLD</div>
            <div>HELLO WORLD</div>
            <div>HELLO WORLD</div>
            <div>HELLO WORLD</div>
            <div>HELLO WORLD</div>
            <div>HELLO WORLD</div>
            <div>HELLO WORLD</div>
            <div>HELLO WORLD</div>
          </div>
        </main>
        <ToggleDark />
      </>
    )
  }
})

export default App
