import React from 'react'
import PropTypes from 'prop-types'
import TextInput from './text-input'



const Form = props => (
    <form onSubmit={props.handleSubmit}>
        <TextInput
            name='name'
            label="Name"
            placeholder="Enter you Name"
            value={props.values.name}
            onChange={props.handleChange}
        />
        <TextInput
            name='email'
            type='email'
            label="Email"
            placeholder="Enter you Email"
            value={props.values.email}
            onChange={props.handleChange}
        />
        <TextInput
            name='password'
            type='password'
            label="Password"
            placeholder="Enter you Password"
            value={props.values.password}
            onChange={props.handleChange}
        />
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
)


Form.propTypes = {
    values: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired
}


export default Form