import React from 'react'
import {
  Label,
  Form,
  Input,
  Button
} from 'reactstrap'

export default function LoginForm({ bsNavBtnClasses, navBtnStyle }) {

  const btnClass = bsNavBtnClasses + 'btn-sm col col-4'
  const inputStyle = { 
    height: '1.25rem',
    width: '90%'
   }
  const inputClasses = 'bg-light bg-opacity-75 border-dark form-control ms-1 me-1'

  return (
    <>
      <Form style={{ height: '60%' }}
        className='d-flex flex-column text-black bg-transparent'>
        <Label>User Name
          <Input type='text'
            className={inputClasses}
            style={inputStyle} />
        </Label>
        <Label>Password
          <Input type='text' className={inputClasses}
            style={inputStyle} />
        </Label>
        <Button type='submit' className={btnClass} style={navBtnStyle} >Submit</Button>
      </Form>
    </>
  )
}
