'use client';

import {usePathname} from "next/navigation";
import {i18n} from "/src/i18n-config";
import {Menu, Transition} from '@headlessui/react'
import React from "react";
import RenderFlag from "./renderFlag";

const changeLocaleCookie = (locale) => {
  document.cookie = `NEXT_LOCALE=${locale}; path=/`
}


export default function SwitchLocale({currentLang, langQuery}) {
  const pathName = usePathname()

  const redirectedPathName = (locale) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <div className="font-mono text-center lg_mt--10 rounded-lg border border-transparent px-0.5 py-2 transition-color hover:border-neutral-700 hover:bg-neutral-800/30">
      <Menu>
        <Menu.Button>{langQuery}</Menu.Button>
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Menu.Items className="flex flex-col">
            {i18n.locales.map((locale) => (
              <React.Fragment key={locale}>
                {
                  currentLang !== locale
                    ?
                    <Menu.Item>
                      <a
                        href={redirectedPathName(locale)}
                        onClick={() => changeLocaleCookie(locale)}
                        className="flex items-center justify-center rounded-lg border border-transparent px-3 py-2 transition-color hover:border-neutral-700 hover:bg-neutral-800/30"
                      >
                        <RenderFlag locale={locale} /> {locale}
                      </a>
                    </Menu.Item>
                    :
                    <></>
                }
              </React.Fragment>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}