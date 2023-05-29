'use client';

import {getDictionary} from "../dictionaries";
import Flag from 'react-world-flags';
import {useEffect, useState} from "react";
import Image from "next/image";

export default function RenderFlag({locale}) {
  const [dict, setDict] = useState({});

  useEffect(() => {
    getDictionary(locale).then((dict) => {
      setDict(dict);
    });
  });

  switch (locale) {
    case "eo":
      return (
        <Image
          src="/img/flags/esperanto-flago.svg"
          alt="Esperanto-flago."
          width={30}
          height={18}
        />
      )
    default:
      return (
        <Flag
          code={dict.flag}
          width={30}
          height={18}
        />
      )
  }
}