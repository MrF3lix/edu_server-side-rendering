import React from 'react'
import { connect } from 'react-redux'
import { updateIsLoaded } from '../actions/global-actions'

class App extends React.Component {
    updateIsLoaded() {
        console.log('try to update')
        this.props.updateIsLoaded(!this.props.global.isLoaded)
    }

    render() {
        const { global } = this.props
        return (
            <div>
                <h1>React Server Side Rendering</h1>
                <p>IsLoaded: {global.isLoaded ? 'Loaded' : 'Not loaded'}</p>
                <button onClick={() => this.updateIsLoaded()}>load/unload</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    global: state.global
})

const mapDispatchToProps = dispatch => ({
    updateIsLoaded: value => dispatch(updateIsLoaded(value))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)