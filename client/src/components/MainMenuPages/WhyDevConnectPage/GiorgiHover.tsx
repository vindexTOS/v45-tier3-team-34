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
import { giorgiInfo } from "../../../assets/front-end-data/team_info";

export function GiorgiHover() {
  return (
    <div>
      {giorgiInfo.map((teamMember, index) => (
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
  const { title, role, image, linkName, link } =
    teamMember;

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Avatar>
          <AvatarImage src={image} />
          <AvatarFallback>
            {title.charAt(0)}
          </AvatarFallback>
        </Avatar>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src={image} />
            <AvatarFallback>
              {title.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">
              {title}
            </h4>
            <p className="text-sm">{role}</p>
            <div className="flex items-center pt-2">
              <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />{" "}
              <a
                href={link}
                className="text-xs text-muted-foreground"
              >
                {linkName}
              </a>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
