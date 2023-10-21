
import React from 'react'

export default function Form({ handleSubmit, value, setValue, updateId }) {
  function handleChange(event) {
    const value = event.target.value;
    setValue(value);
  }
  return (
    <div>
      <form>
        <label htmlFor="">Products:</label>
        <input type="text" autoComplete="off" onChange={handleChange} value={value} maxLength={20} />
        <button onClick={handleSubmit}>{updateId ? "Update" : "Add"}</button>
      </form>
    </div>
  )
}
