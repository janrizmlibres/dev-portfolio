import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  TelegramLogoIcon,
  FacebookLogoIcon,
  InstagramLogoIcon,
  EnvelopeIcon,
  type IconWeight,
} from "@phosphor-icons/react";
import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

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
    case "Email":
      return <EnvelopeIcon size={size} weight={weight} />;
    default:
      return null;
  }
};
