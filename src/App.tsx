import { Route, Switch } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'

export default function App() {
    return (
        <BrowserRouter>
            <Navigation/>
            <Switch>
                <Route exact path="/" component={Home}/>
            </Switch>
            <Footer/>
        </BrowserRouter>
    )
}
