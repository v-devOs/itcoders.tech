import React, { FC } from 'react'

interface Props{
  title: string
  options: string[]
}

export const CheckboxOptions: FC<Props> = ({ title, options }) => {
  return (
    <div className='white-text'>
      <label className='white-text'>{ title }</label>
      <fieldset style={{ border: 'none', padding:  '10px 0'}} >
        <div className='flex wrap' style={{ gap: '20px'}}>
          {
            options.map( opt => (
              <div key={opt} style={{margin: '3px 0'}}>
                <input type='checkbox' value={opt}/>
                <label style={{ marginLeft: '2px'}}>{opt}</label>
              </div>
            ))
          }
        </div>
      </fieldset>

      <div className='user-box'>
        <input type="text" />
        <label>Otros</label>
      </div>
    </div>
  )
}
