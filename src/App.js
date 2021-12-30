import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { getAuth } from 'firebase/auth'
import { onSnapshot } from 'firebase/firestore'
import { createUserProfileDocument } from './firebase/firebase.utils'
import './App.css'
import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import ShopPage from './pages/shop/shop.component'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = getAuth().onAuthStateChanged(
      async (userAuth) => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth)

          onSnapshot(userRef, (snapShot) => {
            this.setState({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data(),
              },
            })
          })
        } else {
          this.setState({ currentUser: userAuth })
        }
      }
    )
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    )
  }
}

export default App
