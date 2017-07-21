import React from 'react'
import {HashRouter,Route,Switch,Link} from 'react-router-dom'
import Home from './Home'
import Postpage from './Postpage'
import {Provider} from 'react-redux'
import store from './store'

class App extends React.Component{

  render(){
    return(
          <HashRouter>
              <Provider store={store}>
                <div>
                  <Link to='/' className="back-home">首页</Link>
                  <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/post/:id' component={Postpage} />
                  </Switch>
                </div>
              </Provider>
          </HashRouter>
    )
  }
}

export default App
