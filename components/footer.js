/**
 * @file footer.js
 */
// Import dependencies
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faYoutube,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

// Import components
import Button from './button';

export default function Footer({heading, posts, subheading, subtext, button}) {
  const iconClasses = `w-8 pr-4 cursor-pointer text-text-color hover:text-purple`;
  const linkClasses = `pr-4 cursor-pointer hover:text-purple`;

  return (
    <footer className={`footer`}>
      <div className={`bg-yellow w-full pt-12`}>
        <h2 className={`text-h2 font-rylan text-text-color text-center pb-8`}>{heading}</h2>
        {posts.map((post, index) => {
          <Link href={post.link}>
            <Image
              src={post.image}
              width={200}
              height={200}
            />
          </Link>
        })}
        <div className={`flex px-16 pb-12`}>
          <h2 className={`text-h3 font-rylan text-text-color`}>{subheading}</h2>
          <p className={`text-paragraph font-barlow text-text-color`}>{subtext}</p>
          <Button 
            color={button.color}
            text={button.text}
            href={button.href}
          />
        </div>
      </div>
      <div className={`footer-credits flex bg-yellow-transparent px-16 py-8`}>
        <p className={`text-text-color font-barlow text-footer font-light`}>Copyright 2020 Rachel Wang Here</p>
        <ul className={`flex text-footer m-auto text-text-color font-barlow font-normal`}>
          <Link href={`/`}><li className={linkClasses}>Home</li></Link>
          <Link href={`/contact`}><li className={linkClasses}>Contact</li></Link>
          <Link href={`/privacy-policy`}><li className={linkClasses}>Privacy Policy</li></Link>
          <Link href={`/terms`}><li className={linkClasses}>Terms of Service</li></Link>
          <Link href={`/disclaimer`}><li className={linkClasses}>Disclaimer</li></Link>
          <Link href={`/site-credits`}><li className={linkClasses}>Site Credits</li></Link>
        </ul>
        <ul className={`flex align-middle`}>
          <Link href={`https://www.facebook.com/rachelwanghere`}><li className={iconClasses}><FontAwesomeIcon icon={faFacebook} /></li></Link>
          <Link href={`https://www.instagram.com/rachelwanghere`}><li className={iconClasses}><FontAwesomeIcon icon={faInstagram} /></li></Link>
          <Link href={`https://www.pinterest.com/rachelwanghere`}><li className={iconClasses}><FontAwesomeIcon icon={faPinterest} /></li></Link>
          <Link href={`https://www.youtube.com/rachelwanghere`}><li className={iconClasses}><FontAwesomeIcon icon={faYoutube} /></li></Link>
          <Link href={`https://www.twitter.com/rachelwanghere`}><li className={iconClasses}><FontAwesomeIcon icon={faTwitter} /></li></Link>
        </ul>
      </div>
    </footer>
  )
}
