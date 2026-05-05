export const NAV_LINKS = ["Home", "About", "Services", "FAQ", "Contact"];

export const getNavPath = (label: string) =>
  label === "Home" ? "/" : `/${label.toLowerCase()}`;
