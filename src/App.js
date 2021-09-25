import './index.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={() => <Home />} />
          <Route exact path="/detail/:id" component={() => <Detail />} />
        </Switch>
      </BrowserRouter>
    </>
  )
}