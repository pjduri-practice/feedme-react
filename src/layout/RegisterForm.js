import React from 'react'
import { Button, Input, Label, Form } from 'reactstrap'

export default function RegisterForm({bsNavBtnClasses, navBtnStyle}) {

  const btnClass = bsNavBtnClasses + 'btn-sm'

  return (
    <>
      <Form style={{ height: '100%' }} 
       className='small text-black bg-secondary bg-opacity-25'>
        <Label>User Name
          <Input type='text' 
          className='bg-light bg-opacity-75 border-dark form-control'
            style={{ height: '5%' }} />
        </Label>
        <Label>Email
          <Input type='text' className='bg-light bg-opacity-75 border-dark'
            style={{ height: '1.75rem' }} />
        </Label>
        <Label>Password
          <Input type='text' className='bg-light bg-opacity-75 border-dark'
            style={{ height: '1.75rem' }} />
        </Label>
        <Label>Verify Password
          <Input type='text' className='bg-light bg-opacity-75 border-dark'
            style={{ height: '1.75rem' }} />
        </Label>
        <Button type='submit' className={btnClass} style={navBtnStyle} >Submit</Button>
      </Form>
    </>
  )
}
