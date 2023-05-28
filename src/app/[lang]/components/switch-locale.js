'use client';

import {usePathname} from "next/navigation";
import {i18n} from "/src/i18n-config";
// import {useEffect} from "react";
import { Menu } from '@headlessui/react'

export default function SwitchLocale({cur, lang}) {
  const pathName = usePathname()
  const redirectedPathName = (locale) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    // not workig yet
    // useEffect(() => {
    //   document.cookie = `NEXT_LOCALE=${locale}; max-age=31536000; path=/`
    // })
    return segments.join('/')
  }

  return (
    //   <label className="flex">{lang}</label>
    //   <ul  className="flex">
    //     {i18n.locales.map((locale) => {
    //       return (
    <div className="font-mono text-center lg_mt--10 rounded-lg border border-transparent px-3 py-2 transition-color hover:border-neutral-700 hover:bg-neutral-800/30">
      <Menu>
        <Menu.Button>{lang}</Menu.Button>
        <Menu.Items className="flex flex-col">
          {i18n.locales.map((locale) => (
            <>
            {
              cur !== locale
              ?
              <Menu.Item>
                <a
                  href={redirectedPathName(locale)}
                >{locale}</a>
              </Menu.Item>
              :
              <></>
            }
            </>
          ))}
        </Menu.Items>
      </Menu>
    </div>
            // <>
            //   {
            //     cur !== locale
            //     ?
            //     <li  className="mx-1" key={locale}>
            //       <a
            //         href={redirectedPathName(locale)}
            //       >{locale}</a>
            //     </li>
            //     :
            //     <></>
            //   }
            // </>
          // )
    //     })}
    //   </ul>
  )
}