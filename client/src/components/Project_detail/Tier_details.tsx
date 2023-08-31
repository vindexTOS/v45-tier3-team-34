import React from 'react'
import { tierCategoryType } from '../../common.types'
import { tiers } from '../../pages/Project/dummy_project'

const TierDetails = ({ tier }: {
    tier:tierCategoryType
}) => {

    const tier_data = tiers.filter(t => t.type === tier)[0];
    //??use a suse effect to --> (no necessary , must if we feth (maybe))
  return (
    <div className='py-4 flex flex-col gap-4 border-b border-b-green-600 dark:border-slate-600'>
          <article className='flex justify-between items-center'>
              <h1 className='text-xl font-thin'>Budget</h1>
              <p className='font-bold text-green-800 dark:text-green-200 text-xl'>${" "}{ tier_data.budget}</p>
          </article>

          <article className='flex justify-between items-center'>
              <h1 className='text-xl font-thin'>Delivery Time </h1>
              <p className='font-bold text-green-800 dark:text-green-200 text-xl'>${" "}{ tier_data.delivery_time}</p>
          </article> 

          <article className='flex justify-between items-center'>
              <h1 className='text-xl font-thin'>Ideal start date </h1>
              <p className='font-bold text-green-800 dark:text-green-200 text-xl'>{" "}{ tier_data.deal_start_date}</p>
          </article> 

          <article className='flex justify-between items-center'>
              <h1 className='text-xl font-thin'>Number of revisions</h1>
              <p className='font-bold text-green-800 dark:text-green-200 text-xl'>{" "}{ tier_data.n_revisions}</p>
          </article> 

          {/*?? samrthing ❌✅ can be replaced bu react icons */}
          <article className='flex justify-between items-center'>
              <h1 className='text-xl font-thin'>Design Customization</h1>
              <p className='font-bold text-green-800 dark:text-green-200 text-xl'>{" "}{ tier_data.design_customisation? '✅':'❌'}</p>
          </article> 

          <article className='flex justify-between items-center'>
              <h1 className='text-xl font-thin'>Content Upload</h1>
              <p className='font-bold text-green-800 dark:text-green-200 text-xl'>{" "}{ tier_data.content_upload? '✅':'❌'}</p>
          </article>

          <article className='flex justify-between items-center'>
              <h1 className='text-xl font-thin'>Responsive Design</h1>
              <p className='font-bold text-green-800 dark:text-green-200 text-xl'>{" "}{ tier_data.responsive_design? '✅':'❌'}</p>
          </article>
    </div>
  )
}

export default TierDetails