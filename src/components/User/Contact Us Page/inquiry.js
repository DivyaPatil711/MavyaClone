import React, { useState } from 'react'
import './inquiry.css'

const inquiry = () => {
  

    return (
        <>
        <div className='inquiry1'>
    <form class="form" onsubmit="return false" autocomplete="off">
  <div class="form-inner">
    <h2>Inquiry</h2>
    <div class="input-wrapper">
      <label for="login-username">Name</label>
      <div class="input-group"><span class="icon">
          <inquiry/></span>
        <input type="text" id="login-username" data-lpignore="true"/>
      </div>
    </div>
    <div class="input-wrapper">
    <label for="login-email">Email</label>
      <div class="input-group"><span class="icon">
          <inquiry/></span>
        <input type="text" id="login-username" data-lpignore="true"/>
      </div>
    </div>
    <div class="input-wrapper">
      <label for="login-username">Phone</label>
      <div class="input-group"><span class="icon">
          <inquiry/></span>
        <input type="text" id="login-username" data-lpignore="true"/>
      </div>
    </div>
    <div class="input-wrapper">
      <label for="login-username">Message</label>
      <div class="input-group"><span class="icon">
          <inquiry/></span>
        <input type="text" id="login-username" data-lpignore="true"/>
      </div>
    </div>
    <div class="btn-group">
      <button class="btn btn--primary">Send</button>
      {/* <a class="btn--text" href="#0">Forgot password?</a> */}
    </div>
  </div>
</form>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
</div>

        </>



  )
}

export default inquiry
