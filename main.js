import { HeroComponent } from "./partials/hero.js";

const app = document.getElementById('app')

const render = ()=>{
    return `
        ${ HeroComponent() }
    `
}

app.insertAdjacentHTML('beforeEnd',render())