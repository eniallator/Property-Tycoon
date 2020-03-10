import { Engine } from "./engine/engine"

window.onload = () => {
    const vroom: Engine = new Engine()
    requestAnimationFrame(() => vroom.update())
}
