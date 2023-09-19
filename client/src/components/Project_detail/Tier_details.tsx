import React from "react";
import { tierCategoryType } from "../../common.types";
import { tiers } from "../../pages/Project/dummy_project";
import { RxCrossCircled } from "react-icons/rx";
import { BsCheckCircle } from "react-icons/bs";

const TierDetails = ({
  tier,
}: {
  tier: tierCategoryType | any;
}) => {
  const tier_data = tiers.filter(
    (t) => t.type === tier
  )[0];
  //??use a suse effect to --> (no necessary , must if we feth (maybe))

  const {
    ContentUpload,
    DeliveryTime,
    DesignCustomization,
    Responsive,
    Revisions,
    StartDate,
    price,
  } = tier;
  return (
    <div className="py-4 flex flex-col gap-4 border-b border-b-green-600 dark:border-slate-600 text-sm text-light-muted dark:text-dark-muted">
      <article className="flex justify-between items-center">
        <h1 className="">Budget</h1>
        <p className="font-bold text-green-800 dark:text-green-200 ">
          $ {price}
        </p>
      </article>

      <article className="flex justify-between items-center">
        <h1 className="">Delivery Time </h1>
        <p className="font-bold text-green-800 dark:text-green-200 ">
          {DeliveryTime.slice(0, 10)}
        </p>
      </article>

      <article className="flex justify-between items-center">
        <h1 className="">Ideal start date </h1>
        <p className="font-bold text-green-800 dark:text-green-200">
          {" "}
          {StartDate.slice(0, 10)}
        </p>
      </article>

      <article className="flex justify-between items-center">
        <h1 className="">Number of revisions</h1>
        <p className="font-bold text-green-800 dark:text-green-200 ">
          {Revisions}
        </p>
      </article>

      {/*?? samrthing ❌✅ can be replaced bu react icons */}
      <article className="flex justify-between items-center">
        <h1 className="">Design Customization</h1>
        <p className="font-bold text-green-800 dark:text-green-200 ">
          {" "}
          {DesignCustomization ? (
            <p className="text-green-500 text-xl font-bold">
              <BsCheckCircle />
            </p>
          ) : (
            <p className="text-red-500 text-2xl font-bold">
              <RxCrossCircled />
            </p>
          )}
        </p>
      </article>

      <article className="flex justify-between items-center">
        <h1 className="">Content Upload</h1>
        <p className="font-bold text-green-800 dark:text-green-200 ">
          {" "}
          {ContentUpload ? (
            <p className="text-green-500 text-xl font-bold">
              <BsCheckCircle />
            </p>
          ) : (
            <p className="text-red-500 text-2xl font-bold">
              <RxCrossCircled />
            </p>
          )}
        </p>
      </article>

      <article className="flex justify-between items-center">
        <h1 className="">Responsive Design</h1>
        <p className="font-bold text-green-800 dark:text-green-200 ">
          {" "}
          {Responsive ? (
            <p className="text-green-500 text-xl font-bold">
              <BsCheckCircle />
            </p>
          ) : (
            <p className="text-red-500 text-2xl font-bold">
              <RxCrossCircled />
            </p>
          )}
        </p>
      </article>
    </div>
  );
};

export default TierDetails;
