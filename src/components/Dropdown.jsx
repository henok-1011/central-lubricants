import React from 'react'

function Dropdown({ label, options, value, onChange }) {
  return (
      <div>
          <label htmlFor={label} className="block">{label}:</label>
          <select className='border border-black-100 rounded-md px-3 py-1' name={label} id={label} value={value || "All"} onChange={onChange}>
              <option value="All">All {label}s</option>
              {options.map(option => (
                  <option key={option} value={option}>{option}</option>
              ))}
          </select>
      </div>
  )
}

export default Dropdown