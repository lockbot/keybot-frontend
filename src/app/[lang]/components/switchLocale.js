'use client';

import {usePathname} from "next/navigation";
import {i18n} from "/src/i18n-config";
import {Menu, Transition} from '@headlessui/react'
import React from "react";
import RenderFlag from "./renderFlag";

const changeLocaleCookie = (locale) => {
  document.cookie = `NEXT_LOCALE=${locale}; path=/`
}


export default function SwitchLocale({dict}) {
  const pathName = usePathname()

  const redirectedPathName = (locale) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  let delay = -100;
  let delay_step = 100;

  return (
    <div>
      <Menu>
        <Menu.Button className="flex font-mono items-center justify-center rounded-lg border border-transparent px-0.5 py-2 transition-color hover:border-neutral-700 hover:bg-neutral-800/30">
          {dict.top_labels.lang}:&nbsp;<RenderFlag locale={dict.lang} />
        </Menu.Button>
        <Transition>
          <Menu.Items className="flex flex-col">
            {i18n.locales.map((locale) => {
              delay += dict.lang !== locale ? delay_step : 0;
              const transitionDelay = `${delay}ms`;
              return (<React.Fragment key={locale}>
                {
                  dict.lang !== locale
                    ?
                  <Transition.Child style={{transitionDelay}}
                    enter="transition duration-1000 ease-out"
                    enterFrom="transform translate-x-1/3 opacity-0"
                    enterTo="transform scale-100 opacity-1"
                    leave="transition duration-500 ease-out"
                    leaveFrom="transform scale-100 opacity-1"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Menu.Item>
                      <a
                        href={redirectedPathName(locale)}
                        onClick={() => changeLocaleCookie(locale)}
                        className="flex items-center justify-between rounded-lg border border-transparent px-3 py-2 transition-color hover:border-neutral-700 hover:bg-neutral-800/30"
                      >
                        <RenderFlag locale={locale} /> {locale}
                      </a>
                    </Menu.Item>
                  </Transition.Child>
                    :
                  <></>
                }
              </React.Fragment>);
            })}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}