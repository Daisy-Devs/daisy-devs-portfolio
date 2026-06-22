import { Button } from '@/components/ui/button'
import { PRICING } from '@/constants';
import { CircleCheck, Clock3, TabletSmartphone } from 'lucide-react'
import React from 'react'

type MobilePackagesProps = {
  currency: "INR" | "USD";
};
const MobilePackages: React.FC<MobilePackagesProps> = ({currency}) => {
  return (
    <section className="mx-auto px-margin-desktop mb-30">
<div className="flex items-center gap-4 mb-12">
<TabletSmartphone size={50} className="text-secondary text-4xl"/>
<h2 className="font-bricolage-grotesque font-extrabold text-3xl">Mobile App Packages</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
{/* <!-- Standard App --> */}
<div className="bg-surface-container border-2 border-on-background rounded-[30px] p-10 hover-drop transition-all">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="font-bricolage-grotesque font-bold text-3xl">Standard App</h3>
<p className="text-on-surface-variant">iOS or Android platform</p>
</div>
<div className="text-right">
<div className="font-bricolage-grotesque text-xl text-primary font-bold" data-price-inr="25000"> {PRICING[currency].standard}</div>
<div className="text-xs text-on-surface-variant"><Clock3 size={20} className=" text-xs inline"/>  5-6 weeks</div>
</div>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3"><CircleCheck className=" text-secondary align-middle text-lg"/> Online ordering &amp; Loyalty</li>
<li className="flex items-center gap-3"><CircleCheck className=" text-secondary align-middle text-lg"/> 2 App Themes (Light & Dark)</li>
<li className="flex items-center gap-3"><CircleCheck className=" text-secondary align-middle text-lg"/> Push notifications</li>
<li className="flex items-center gap-3"><CircleCheck className=" text-secondary align-middle text-lg"/> Payment gateway</li>
</ul>
<Button variant={'tertiary'}>Go Mobile</Button>
</div>
{/* <!-- Premium App --> */}
<div className="bg-tertiary-container border-2 border-on-background rounded-[30px] p-10 hover-drop transition-all relative">
<div className="absolute -top-3 -left-3 bg-secondary text-on-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Premium</div>
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="font-bricolage-grotesque font-bold text-3xl">Premium App</h3>
<p className="text-on-tertiary-container">Full-featured super app</p>
</div>
<div className="text-right">
<div className="font-bricolage-grotesque text-secondary text-xl font-bold" data-price-inr="50000"> {PRICING[currency].premium}</div>
<div className="text-xs text-on-tertiary-container"><Clock3 size={20} className=" text-xs inline"/>  6-8 weeks</div>
</div>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 font-bold"><CircleCheck className="text-secondary text-lg"/> Everything in Standard</li>
<li className="flex items-center gap-3 "><CircleCheck className="text-secondary text-lg"/> Admin + User Apps</li>
<li className="flex items-center gap-3"><CircleCheck className="text-secondary text-lg"/> In-app chat support</li>
<li className="flex items-center gap-3"><CircleCheck className="text-secondary text-lg"/> 1 Year Support Incl.</li>
</ul>
<Button variant="secondary">Go Premium</Button>
</div>
</div>
</section>
  )
}

export default MobilePackages