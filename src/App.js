
import React, { useState } from 'react';
import './App.css';

function App() {
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = event => {
    event.preventDefault();
   setSubmitting(true);

   setTimeout(() => {
     setSubmitting(false);
   }, 3000)
 }

  return(
    <div className="wrapper">
      <h1>Enter a URL</h1>
      {submitting &&
       <div>Loading...</div>
     }
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>Link to Product</p>
            <input name="name" />
          </label>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App;