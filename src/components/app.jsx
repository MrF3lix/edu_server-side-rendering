import React from 'react'
import { connect } from 'react-redux'

const App = () => (
    <div>
        <h1>React Server Side Rendering</h1>
    </div>
)

const mapStateToProps = state => ({
    global: state.global
})

export default connect(mapStateToProps, null)(App)