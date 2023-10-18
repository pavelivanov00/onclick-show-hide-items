import React, { Component } from 'react'
import Items from './ItemList'

class GetItems extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         showItems: false
      }
    }

    ShowItems = () => {
        this.setState({showItems:true})
    }

    HideItems = () => {
        this.setState({showItems:false})
    }
    render() {
        return (
            <div className='center'>
                <button onClick={this.ShowItems}>Show Items</button>
                <button onClick={this.HideItems}>Hide Items</button>
                {this.state.showItems && <Items />}
            </div>
        )
    }
}

export default GetItems