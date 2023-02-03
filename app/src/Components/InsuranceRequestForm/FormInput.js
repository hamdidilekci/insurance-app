import { useId } from 'react'

export default function FormInput({ label, type }) {
  const inputId = useId();
  return (
    <>
      {
        type === 'text-area' ?
          <textarea style={{height: "100%"}}  type={type} rows="3" className="form-control mb-2" id={inputId} placeholder={label} />
        :
          <input  type={type} className="form-control mb-2" id={inputId} placeholder={label} /> 
      }
      {
        label && <label htmlFor={inputId}>{ label }</label>
      }
      
    </>
  )
}