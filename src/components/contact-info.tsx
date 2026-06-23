import React from 'react'

const ContactInfo = () => {
  return (
    <address className='flex flex-col gap-3'>
      <p className="font-nunito-sans text-xl text-secondary">Email: <span className='text-on-surface'>daisydevs.org@gmail.com</span></p>
      <p className="font-nunito-sans text-xl text-secondary">Contact number:</p>
      <ul className="flex list-inside list-disc flex-col gap-2">
        <li className="font-nunito-sans text-xl">+91-7887565829</li>
        <li className="font-nunito-sans text-xl">+91-8925418502</li>
        <li className="font-nunito-sans text-xl">+91-8468897693</li>
      </ul>
    </address>
  )
}

export default ContactInfo