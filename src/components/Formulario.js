
import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

const options = [
  { key: 'm', text: 'Mujer', value: 'male' },
  { key: 'f', text: 'Hombre', value: 'female' },
  { key: 'o', text: 'Otro', value: 'other' },
]

class Formulario extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
      <Form>
        <Form.Group widths='equal'>
          <Form.Input fluid label='Primer nombre' placeholder='First name' />
          <Form.Input fluid label='Apellido' placeholder='Last name' />
          <Form.Select
            fluid
            label='Sexo'
            options={options}
            placeholder='Gender'
          />
        </Form.Group>
        <Form.Group inline>
          <label>Edad</label>
          <Form.Radio
            label='Menor de edad,'
            value='sm'
            checked={value === 'sm'}
            onChange={this.handleChange}
          />
          <Form.Radio
            label='Mayor de edad.'
            value='md'
            checked={value === 'md'}
            onChange={this.handleChange}
          />
          <Form.Radio
            label='Tercera edad.'
            value='lg'
            checked={value === 'lg'}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.TextArea label='Especificacion' placeholder='...........' />
        <Form.Checkbox label='Aceptas terminos y condiciones' />
        <Form.Button>Aceptar</Form.Button>
      </Form>
    )
  }
}

export default Formulario