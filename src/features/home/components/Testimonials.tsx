import React from 'react'

const Testimonials = () => {
  return (
   <div className="py-24 bg-surface-container-low relative overflow-hidden mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
<div className="text-center mb-16">
<h2 className="font-bricolage-grotesque text-4xl text-on-surface mb-4">Voices from the Garden</h2>
<p className="font-nunito-sans text-4xl text-on-surface-variant">How we&apos;ve helped our clients bloom.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-on-primary border-2 border-on-surface p-8 rounded-[40px] rounded-tr-none drop-border -rotate-1 relative group">

<p className="font-nunito-sans text-xl mb-6 italic">&quot;Daisy Devs didn&apos;t just build our site; they nurtured our brand&apos;s digital presence from a seedling to a full-grown forest.&quot;</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-primary-container border-2 border-on-surface"></div>
<div>
<p className="font-bold text-on-surface">Willow Reed</p>
<p className="font-geist-sans text-on-surface-variant">Founder of Flora &amp; Co</p>
</div>
</div>
</div>
<div className="bg-on-primary border-2 border-on-surface p-8 rounded-[40px] rounded-bl-none drop-border rotate-1 md:translate-y-8 relative group">

<p className="font-nunito-sans text-xl mb-6 italic">&quot;The attention to detail and organic design language they brought to our platform was exactly what we needed to stand out.&quot;</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-secondary-container border-2 border-on-surface"></div>
<div>
<p className="font-bold text-on-surface">Forest Thorne</p>
<p className="font-geist-sans text-on-surface-variant">Lead at Verdant Horizon</p>
</div> 
</div>
</div>
<div className="bg-on-primary border-2 border-on-surface p-8 rounded-[40px] rounded-tl-none drop-border -rotate-1 relative group">

<p className="font-nunito-sans text-xl mb-6 italic">&quot;Working with them felt like a true partnership. They understood our vision and helped it flourish in ways we hadn&apos;t imagined.&quot;</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-tertiary-container border-2 border-on-surface"></div>
<div>
<p className="font-bold text-on-surface">Sage Meadow</p>
<p className="font-geist-sans text-on-surface-variant">CEO of Rooted Tech</p>
</div>
</div>
</div>
</div>
</div>
  )
}

export default Testimonials