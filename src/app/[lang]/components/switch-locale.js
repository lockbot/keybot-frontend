'use client';

import {usePathname} from "next/navigation";
import {i18n} from "/src/i18n-config";
import {useEffect} from "react";

export default function SwitchLocale({lang}) {
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
    <div className="flex">
      <p>{lang}:</p>
      <ul  className="flex">
        {i18n.locales.map((locale) => {
          return (
            <li  className="mx-1" key={locale}>
              <a
                href={redirectedPathName(locale)}
              >{locale}</a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}