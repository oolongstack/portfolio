import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaGithub, FaLink, FaTwitter, FaYoutube } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "",
  },
  {
    icon: <FaLink />,
    path: "",
  },
  ,
  {
    icon: <FaYoutube />,
    path: "",
  },
  {
    icon: <FaTwitter />,
    path: "",
  },
];

interface SocialProps {
  containerStyles?: string;
  iconStyles?: string;
}
function Social({ containerStyles, iconStyles }: SocialProps) {
  return (
    <div className={cn(containerStyles)}>
      {socials.map((social) => {
        return (
          <Link
            key={social?.path}
            href={social!.path}
            className={cn(iconStyles)}
          >
            {social?.icon}
          </Link>
        );
      })}
    </div>
  );
}

export default Social;
