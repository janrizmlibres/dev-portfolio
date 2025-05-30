import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  TelegramLogoIcon,
  FacebookLogoIcon,
  InstagramLogoIcon,
  type IconWeight,
} from "@phosphor-icons/react";

export const getIcon = (platform: string, size: number, weight: IconWeight) => {
  switch (platform) {
    case "Github":
      return <GithubLogoIcon size={size} weight={weight} />;
    case "LinkedIn":
      return <LinkedinLogoIcon size={size} weight={weight} />;
    case "Telegram":
      return <TelegramLogoIcon size={size} weight={weight} />;
    case "Facebook":
      return <FacebookLogoIcon size={size} weight={weight} />;
    case "Instagram":
      return <InstagramLogoIcon size={size} weight={weight} />;
    default:
      return null;
  }
};
