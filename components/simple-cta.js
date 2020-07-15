/**
 * @file simple-cta.js
 */
// Import dependencies
import Link from 'next/link'

export default function SimpleCTA() {
  return (
    <section className="simple-cta text-left align-center mt-8 mb-12">
      <div className={`simple-cta__heading-container pb-4 text-center text-3xl`}>
        <h2 className={`text-2xl`}>Studio Membership</h2>
      </div>

      <div className={`simple-cta__body-container`}>
        <div className={`simplme-cta__text-container mt-4 mb-10`}>
          <h4 className={`simple-cta__subheading text-lg pb-2`}>Looking for more?</h4>
          <p className={`simple-cta__text text-base`}>
            Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit. Phasellus ultricies ultricies 
            augue eu feugiat. <br />
            <Link href="/">
              <strong>Read More</strong>
            </Link>
          </p>
        </div>
        <Link href="/">
          <a className={`simple-cta__button uppercase text-center w-full px-16 py-8 bg-gray-400 text-black inline-block`}>
            <strong>Register Now</strong>
          </a>
        </Link>
      </div>
      
    </section>
  )
}
