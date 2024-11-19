'use client';
import Image from 'next/image';
import { Menu as MenuIcon } from 'lucide-react';
import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';

interface NavElem {
  name: string;
  path: string;
}

interface NavProps {
  logoPath: string;
  navElems: NavElem[];
}

const Nav = ({ ...props }: NavProps) => {
  return (
    <div className="bg-white flex w-full justify-between md:pt-10 items-center">
      <Image src={props.logoPath} height={100} width={200} alt="Logo" />

      <div className="block md:hidden">
        <Menu>
          <div className="relative">
            <Menu.Button>
              <MenuIcon />
            </Menu.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 w-48 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                <div className="py-1">
                  {props.navElems.map((elem, index) => (
                    <Menu.Item key={index}>
                      {({ active }) => (
                        <Link href={elem.path}>
                          <p
                            className={`block px-4 py-2 text-sm text-gray-700 ${active ? 'bg-gray-100' : ''}`}
                          >
                            {elem.name}
                          </p>
                        </Link>
                      )}
                    </Menu.Item>
                  ))}
                </div>
              </Menu.Items>
            </Transition>
          </div>
        </Menu>
      </div>

      <div className="hidden md:flex space-x-4">
        {props.navElems.map((elem, index) => (
          <Link key={index} href={elem.path}>
            <p className="font-semibold cursor-pointer">{elem.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Nav;
