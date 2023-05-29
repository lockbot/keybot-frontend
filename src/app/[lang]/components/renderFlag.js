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
          className="mr-2"
          width={24}
          height={8}
          priority
        />
      )
    default:
      return (
        <Flag
          code={dict.flag}
          className="mr-2"
          width={24}
          height={8}
        />
      )
  }
}