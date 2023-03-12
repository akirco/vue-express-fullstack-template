import { defineComponent, onMounted } from 'vue'
import { RouterView } from 'vue-router'

const Root = defineComponent({
  name: 'HomeView',
  setup() {
    onMounted(() => {})

    return () => {
      return <RouterView />
    }
  }
})

export default Root
