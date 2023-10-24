import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <>
     <header>
    <h1 className='contact'>Contact Us</h1>
  </header>
    <div className="boxe">
  <section>
    <h2>Contact Information</h2>
    <p>For inquiries, feedback, or partnership opportunities, please feel free to reach out to us using the following contact details:</p>
    <ul>
      <li><strong>Email:</strong> [Your Contact Email]</li>
      <li><strong>Phone:</strong> [Your Contact Phone Number]</li>
      <li><strong>Address:</strong> [Your Contact Address]</li>
    </ul>
  </section>
  <section>
    <h2>Contact Form</h2>
    <p>You can also send us a message using the contact form below. We'll get back to you as soon as possible.</p>
    <form action="process_contact_form.php" method="post">
      <label for="name">Your Name:</label>
      <input type="text" id="name" name="name" required/>
      <label for="email">Email Address:</label>
      <input type="email" id="email" name="email" required/>
      <label for="message">Your Message:</label>
      <textarea id="message" name="message" rows="5" required></textarea>
      <button type="submit">Send Message</button>
    </form>
  </section>
  <footer>
    <p>Thank you for reaching out to [Your Organization/Project Name]. We look forward to hearing from you!</p>
  </footer>
  </div>
    </>
  )
}

export default Contact