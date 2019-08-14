import React from "react"

class App extends React.Component {
    
    constructor() {
        super()
        this.state = {
            txt: "this is the state txt"
        }
    }

    update (e) {
        this.setState({txt: e.target.value})
    }   

    render() {
        return (
            <div>
                <Button>I <Heart /> React</Button>
            </div>
        )
    }
}

const Button = props => <button>{props.children}</button>

class Heart extends React.Component {
    render(){
      return <span>&hearts;</span>
    }
  }
 
export default App;