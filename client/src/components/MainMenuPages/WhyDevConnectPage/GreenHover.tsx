import { CalendarIcon } from "@radix-ui/react-icons";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../Shadcn/components/ui/avatar";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../../../Shadcn/components/ui/hover-card";
import { greenInfo } from "../../../assets/front-end-data/team_info";

export function GreenHover() {
  return (
    <div>
      {greenInfo.map((teamMember, index) => (
        <TeamHoverCard
          key={index}
          teamMember={teamMember}
        />
      ))}
    </div>
  );
}
interface TeamMemberProps {
  teamMember: {
    title: string;
    role: string;
    image: string;
    linkName: string;
    link: string;
  };
}
function TeamHoverCard({
  teamMember,
}: TeamMemberProps) {
  const { title, role, image, link } = teamMember;

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Avatar>
          <AvatarImage
            src={image}
            className="filter grayscale hover:filter-none hover:animate-ping"
          />
          <AvatarFallback>
            {title.charAt(0)}
          </AvatarFallback>
        </Avatar>
      </HoverCardTrigger>
      <HoverCardContent className="w-60 cursor-pointer">
        <a href={link} className="">
          <div className="flex justify-center space-x-4 items-center">
            <Avatar className="">
              <AvatarImage src={image} />
              <AvatarFallback>
                {title.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="">
              <div>
                <h4 className="text-sm font-semibold text-tersiary dark:text-muted dark:hover:text-primary">
                  {title}
                </h4>
                <p className="text-sm text-muted">
                  {role}
                </p>
                <p className="text-xs text-primary">
                  LinkedIn
                </p>
              </div>
            </div>
          </div>
        </a>
      </HoverCardContent>
    </HoverCard>
  );
}
