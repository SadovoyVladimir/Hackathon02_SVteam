import React from 'react'
import PropTypes from 'prop-types'
import Input from './form-component/Input'
import Label from './form-component/Label'
import Select from './form-component/Select'

const TextField = ({ label, name, htmlFor }) => {
  return (
    <>
      <div className='mb-4'>
        <Label htmlFor={htmlFor} label={label} />
        <div className='input-group has-validation'>
          <Input type={'text'} id={name} name={name} />
        </div>
      </div>

      <div className='mb-4'>
        <Label htmlFor={htmlFor} label={'Селектовое поле'} />
        <div className='input-group has-validation'>
          <Select />
        </div>
      </div>
    </>
  )
}

export default TextField

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}
