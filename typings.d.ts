export interface NavItemProps {
  text: string;
  href: string;
  active?: boolean;
  setNavActive: (active: boolean) => void;
}
export interface SvgProps {
  className: string;
  viewBox: string;
  dProps: string;
}

export interface StaffMemberProps {
    id: string;
    name: string;
    description: string;
    phone: string;
    src: string;
  }
  
export interface MapContainerProps {
  googleMapsApiKey: string;
}

export  interface StaffMemberPage {
  id: string;
  name: string;
  description: string;
  job: string;
  services: string[]
  phone: string;
  productsSvg: string;
  productsSvgAlt: string;
  mainIcon: string;
  mainIconAlt: string;
  hasJob: boolean;
  Images: {src: string[]; ImageAlts : string[]};
  
}