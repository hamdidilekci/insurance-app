import { useId } from 'react'

export default function FormInput({ name, label, type, value, onChange}) {
  const inputId = useId();

  const inputOptions = {
    name,
    onChange,
    value,
    type,
    placeholder: label,
    id: inputId
  }

  return (
    <>
      {
        type === 'text-area' ?
          <textarea {...inputOptions} style={{height: "100%"}} rows="3" className="form-control mb-2" />
        :
          <input {...inputOptions} className="form-control mb-2" /> 
      }
      {
        label && <label htmlFor={inputId}>{ label }</label>
      }
      
    </>
  )
}