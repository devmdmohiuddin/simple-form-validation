import React, { Component } from 'react'
import Form from './from'




class Inputs extends Component {

    state = {
        name: '',
        email: '',
        password: ''
    }

    handleChange = event => {
        this.setState ({
            [event.target.name]: event.target.value
        })
    }

   handleSubmit = event => {
       event.preventDefault ()
    
       console.log (this.state)

       this.setState ({ name: '', email: '', password: '' })
   }

    render () {
        return (
            
            <div className="container my-5">

                <Form
                    values={this.state}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}

                />
                

            </div>
        )
    }
}

export default Inputs