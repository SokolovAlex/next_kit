'use client';
import React, { useState } from "react";
import { ChartPieIcon,  PuzzlePieceIcon, Bars3CenterLeftIcon } from '@heroicons/react/24/outline';
import { GlobeEuropeAfricaIcon } from '@heroicons/react/24/solid';
import clsx from "clsx";
import { NavLink } from "../button/nav-link";
import { usePathname } from "next/navigation";

const links = [{
  href: `/dashboard`,
  Icon: ChartPieIcon,
  text: `Dashboard`,
}, {
  href: `/projects`,
  Icon: ChartPieIcon,
  text: `Projects`,
}, {
  href: `/experience`,
  Icon: GlobeEuropeAfricaIcon,
  text: `Experience`,
}, {
  href: `/hobbies`,
  Icon: PuzzlePieceIcon,
  text: `Hobbies`,
}]

export const BurgerMenu = () => {
  const [open, setOpen] = useState<boolean>(false);
  const toggle = () => setOpen(x => !x);
  const pathname = usePathname(); 

  return (
    <div>
        <div className={clsx(`z-40 bg-steel-200 h-screen fixed transition-transform w-1/4 px-6 py-12`,
          !open && '-translate-x-full'
        )}>
          {links.map(({ href, Icon, text}) => (
              <NavLink key={href} onClick={toggle} active={pathname === href} href={href}><Icon className="w-5"/>{text}</NavLink>
          ))}
        </div>
        <Hamburger open={open} onClick={toggle} />
        <Overlay open={open} onClick={toggle} />
     </div>
   );
};


type HamburgerProps = {
  open: boolean;
  onClick: () => void;
};

const Hamburger = ({ open, onClick }: HamburgerProps) => (
  <button className={clsx(`flex flex-col justify-center items-center fixed mt-5 ml-5 z-50 transition-transform`,
      open && 'translate-x-80'
    )} onClick={onClick}>
      <span className={clsx(`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm`,
        open ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
      )} />
      <span className={clsx(`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5`,
        open ? 'opacity-0' : 'opacity-100'
      )} />
      <span className={clsx(`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm`,
        open ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
      )} />
  </button>
);

type OverlayProps = {
  open: boolean;
  onClick: () => void;
}

const Overlay = ({ open, onClick }: OverlayProps) => (
  <div className={
    clsx(`fixed z-30 w-screen h-screen bg-gray-200 transition-opacity cursor-pointer transform -translate-x-50`,
        open ? `opacity-60` : `opacity-0 translate-x-full`)
      } onClick={onClick}/>
);
