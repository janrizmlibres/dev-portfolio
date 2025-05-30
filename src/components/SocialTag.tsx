import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  TelegramLogoIcon,
  FacebookLogoIcon,
  InstagramLogoIcon,
} from "@phosphor-icons/react";

interface Props {
  platform: string;
}

const ICON_SIZE = 24;
const ICON_WEIGHT = "fill";

const getIcon = (platform: string) => {
  switch (platform) {
    case "Github":
      return <GithubLogoIcon size={ICON_SIZE} weight={ICON_WEIGHT} />;
    case "LinkedIn":
      return <LinkedinLogoIcon size={ICON_SIZE} weight={ICON_WEIGHT} />;
    case "Telegram":
      return <TelegramLogoIcon size={ICON_SIZE} weight={ICON_WEIGHT} />;
    case "Facebook":
      return <FacebookLogoIcon size={ICON_SIZE} weight={ICON_WEIGHT} />;
    case "Instagram":
      return <InstagramLogoIcon size={ICON_SIZE} weight={ICON_WEIGHT} />;
    default:
      return null;
  }
};

const SocialTag = ({ platform }: Props) => {
  return (
    <a
      href="#"
      className="flex items-center gap-2 text-sm text-gray-100 italic p-4 border-1 rounded-full"
    >
      {getIcon(platform)}
      <span>{platform}</span>
    </a>
  );
};

export default SocialTag;
