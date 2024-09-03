import React from 'react'

function Newsletter() {
  return (
    <section className='newsletter'>
        <div className="subscribe">
          <p>Subscribe to my mailing list</p>
          <form>
              <input type="email" name="" id="" placeholder='Your Email' required/><button>Subscribe</button>
          </form>
        </div>
    </section>
  )
}

export default Newsletter