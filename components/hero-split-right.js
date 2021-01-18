/**
 * 
 * @file hero-split-right.js
 */

export default function HeroSplitRight({ heading, image }) {
  return (
    <section className={`hero-split-right`}>
      <div className={`flex bg-neutral-background md:px-64 pt-16 pb-48`}>
        <div className={`heading-container w-7/12 pt-32`}>
          <h1 className={`leading-tight text-huge text-text-color font-rylan w-6/12`}>{heading}</h1>
        </div>
        <div className={`image-container w-4/12 -mt-32`}>
          <div className={`clear-background bg-clear-background p-10 relative z-10 transform translate-x-8 translate-y-24 h-full`} />
          <div className={`relative z-30`}>
            <img src={image} />
          </div>
        </div>
      </div>
    </section>
  )
}
