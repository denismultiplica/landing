import animations from './common/animations'
import scroll from './common/scroll'
import slider from './common/slider'
import start from './common/start'

const init = () => {
  animations()
  scroll()
  slider()
  start()
}

document.addEventListener('DOMContentLoaded', init, false)
