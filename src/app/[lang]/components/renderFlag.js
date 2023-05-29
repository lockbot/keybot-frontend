'use client';

import {getDictionary} from "../dictionaries";
import Flag from 'react-world-flags';
import {useEffect, useState} from "react";

export default function RenderFlag({locale}) {
  const [dict, setDict] = useState({});

  useEffect(() => {
    getDictionary(locale).then((dict) => {
      setDict(dict);
    });
  });

  return (
    <Flag
      code={dict.flag}
      className="mr-2"
      width={24}
      height={8}
    />
  )
}