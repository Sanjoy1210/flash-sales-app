import { IconType } from "react-icons"

type NavbarItemProps = {
    title: string,
    Icon: IconType,
    onClick: () => void,
    isActive: boolean,
}

export default function NavbarItem({ title, Icon, ...props }: NavbarItemProps) {
  return (
    <li className="inline-flex flex-col items-center justify-center px-5 gap-1 group cursor-pointer" onClick={props?.onClick}>
        <Icon className={`text-2xl ${props?.isActive ? "text-primary" : "text-light-gray"} group-hover:text-primary`} />
        <span className={`text-[10px] ${props?.isActive ? "text-primary font-semibold" : "text-light-gray font-normal"} group-hover:text-primary`}>{title}</span>
    </li>
  )
}
