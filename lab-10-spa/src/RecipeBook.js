import React from 'react'
import AddNew from './components/AddNew'
import Listing from './components/Listing'
export default class RecipeBook extends React.Component {

    state = {
        'active':'listing' // if `active` variable is 'listing', then we show the listing component
                           // if `active` variable is 'addnew', then we show the add new component
    }

    render() {
        return <React.Fragment>
            <div className="container">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <button className="nav-link active" aria-current="page" onClick={()=>{
                            this.setActive('listing')
                        }}>
                            All Recipes
                        </button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link" onClick={()=>{
                            this.setActive('addnew')
                        }}>Add New</button>
                    </li>                 
                </ul>
                {this.renderContent()}
            </div>

        </React.Fragment>
    }

    renderContent() {
        if (this.state.active=='listing') {
            return <Listing/>
        } else if (this.state.active=="addnew") {
            return <AddNew/>
        }

    }

    setActive = (page) => {
        this.setState({
            'active': page
        })
    }
}