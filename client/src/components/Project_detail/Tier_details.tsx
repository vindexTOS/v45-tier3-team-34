import React from 'react'
import { tierCategoryType } from '../../common.types'
import { tiers } from '../../pages/Project/dummy_project'
import { RxCrossCircled } from "react-icons/rx";
import { BsCheckCircle } from 'react-icons/bs';

const TierDetails = ({ tier }: { tier: tierCategoryType | any }) => {
  const tier_data = tiers.filter((t) => t.type === tier)[0]
  //??use a suse effect to --> (no necessary , must if we feth (maybe))

  const {
    ContentUpload,
    DeliveryTime,
    DesignCustomization,
    Responsive,
    Revisions,
    StartDate,
    price,
  } = tier
  return (
    <div className="py-4 flex flex-col gap-4 border-b border-b-green-600 dark:border-slate-600">
      <article className="flex justify-between items-center">
        <h1 className="text-xl font-thin">Budget</h1>
        <p className="font-bold text-green-800 dark:text-green-200 text-xl">
          $ {price}
        </p>
      </article>

      <article className="flex justify-between items-center">
        <h1 className="text-xl font-thin">Delivery Time </h1>
        <p className="font-bold text-green-800 dark:text-green-200 text-xl">
          {DeliveryTime.slice(0, 10)}
        </p>
      </article>

      <article className="flex justify-between items-center">
        <h1 className="text-xl font-thin">Ideal start date </h1>
        <p className="font-bold text-green-800 dark:text-green-200 text-xl">
          {' '}
          {StartDate.slice(0, 10)}
        </p>
      </article>

      <article className="flex justify-between items-center">
        <h1 className="text-xl font-thin">Number of revisions</h1>
        <p className="font-bold text-green-800 dark:text-green-200 text-xl">
          {Revisions}
        </p>
      </article>

      {/*?? samrthing ❌✅ can be replaced bu react icons */}
      <article className="flex justify-between items-center">
        <h1 className="text-xl font-thin">Design Customization</h1>
        <p className="font-bold text-green-800 dark:text-green-200 text-xl">
          {' '}
          {DesignCustomization ? 
            <p className='text-green-500 text-xl font-bold'>
            <BsCheckCircle/>
          </p>
           : <p className='text-red-500 text-2xl font-bold'>
            <RxCrossCircled/>
          </p>}
        </p>
      </article>

      <article className="flex justify-between items-center">
        <h1 className="text-xl font-thin">Content Upload</h1>
        <p className="font-bold text-green-800 dark:text-green-200 text-xl">
          {' '}
          {ContentUpload ?
            <p className='text-green-500 text-xl font-bold'>
            <BsCheckCircle/>
          </p>
            : <p className='text-red-500 text-2xl font-bold'>
            <RxCrossCircled/>
          </p>}
        </p>
      </article>

      <article className="flex justify-between items-center">
        <h1 className="text-xl font-thin">Responsive Design</h1>
        <p className="font-bold text-green-800 dark:text-green-200 text-xl">
          {' '}
          {Responsive ?
            <p className='text-green-500 text-xl font-bold'>
            <BsCheckCircle/>
          </p>
            : <p className='text-red-500 text-2xl font-bold'>
            <RxCrossCircled/>
          </p>}
        </p>
      </article>
    </div>
  )
}

export default TierDetails
