import React from 'react'
import "../styles/contact.scss";
const Contact = () => {
  return (
    <div className='contact'>
            <main>
<h1>Contact Us</h1>
<form>
<div>
    <label>name</label>
    <input type="text" required placeholder='abc' />
</div>
<div>
    <label>Email</label>
    <input type="email" required placeholder='abc@gmail.com' />
</div>
<div>
    <label >message</label>
    <input type="text" required placeholder='Tell us about your query ...' />
</div>
<button type='submit'>send</button>
</form>

            </main>
    </div>
  )
}

export default Contact