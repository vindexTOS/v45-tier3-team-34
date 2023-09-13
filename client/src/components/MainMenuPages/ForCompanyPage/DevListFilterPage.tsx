import {
  RadioGroup,
  RadioGroupItem,
} from "../../../Shadcn/components/ui/radio-group";
import { Label } from "../../../Shadcn/components/ui/label";

export default function DevListFilterPage() {
  return (
    <div>
      <div className="min-w-max text-[.8rem] text-muted dark:text-muted mb-10">
        <p>Filter Menu</p>
        <div className="mt-5">
          <ul className="space-y-5">
            <li>
              <label className="inline-flex items-center mb-2">
                <span className="text-[1rem] font-semibold text-primary dark:text-primary">
                  Skills
                </span>
              </label>

              <RadioGroup
                defaultValue=""
                className="ml-4 "
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="option-one"
                    id="option-one"
                  />
                  <Label htmlFor="option-one">
                    Web Developer
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="option-two"
                    id="option-two"
                  />
                  <Label htmlFor="option-two">
                    Mobile Developer
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="option-three"
                    id="option-three"
                  />
                  <Label htmlFor="option-three">
                    Game Developer
                  </Label>
                </div>
              </RadioGroup>
            </li>
            <li>
              <label className="inline-flex items-center mb-2">
                <span className="text-[1rem] font-semibold text-primary dark:text-primary">
                  Technologies
                </span>
              </label>
              <RadioGroup
                defaultValue=""
                className="ml-4 "
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="option-one"
                    id="option-one"
                  />
                  <Label htmlFor="option-one">
                    React.js
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="option-two"
                    id="option-two"
                  />
                  <Label htmlFor="option-two">
                    Python/Django
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="option-three"
                    id="option-three"
                  />
                  <Label htmlFor="option-three">
                    Swift io
                  </Label>
                </div>
              </RadioGroup>
            </li>
            <li>
              <label className="inline-flex items-center mb-2">
                <span className="text-[1rem] font-semibold text-primary dark:text-primary">
                  Location
                </span>
              </label>
              <RadioGroup
                defaultValue=""
                className="ml-4 "
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="option-one"
                    id="option-one"
                  />
                  <Label htmlFor="option-one">
                    Onsite
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="option-two"
                    id="option-two"
                  />
                  <Label htmlFor="option-two">
                    Remote
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="option-three"
                    id="option-three"
                  />
                  <Label htmlFor="option-three">
                    Both - Hybrid
                  </Label>
                </div>
              </RadioGroup>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
