import React, { FC } from 'react'

interface Props{
  options: string[]
  title: string
}

export const SelectMenu: FC<Props> = ({ title, options }) => {
  return (
    <div className='flex column'>
      <label className='white-text'>{ title }</label>
      <select className='white-text p-10 input-sct'>
        {
          options.map( opt => (
            <option 
              key={opt}
              value={opt}
            >
              { opt }                           
            </option>
          ))
        }
      </select>
    </div>
  )
}
