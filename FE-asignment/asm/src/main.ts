import './style.css'
import typescriptLogo from './typescript.svg'
import Navigo from 'navigo';
import homePage from './page/homePage/home';

const router = new Navigo('/', { linksSelector: "a" })

export type ComponentBase = {
  render: () => Promise<string>;
  afterRender?: () => void
}

const print = async (component: ComponentBase, id: any) => {
  console.log(id)
  document.getElementById('app').innerHTML = await component.render(id)
  if (component.afterRender) {
    component.afterRender(id)
  }
}

router.on({
  "/": () => {
    print(homePage)
  }
})
router.resolve()