import Image from "next/image";
import {RenderResumeBasedOnDevice} from "/src/app/[lang]/resume/components/deviceRendererResume";
import {getDictionary} from "/src/app/[lang]/dictionaries";
import SwitchLocale from "../components/switchLocale";
import {closeResume} from "./components/backResume";

export const metadata = {
  title: 'Lucas Borges RÉSUMÉ',
  description: 'RÉSUMÉ',
}

export default async function Resume({ params: { lang } }) {
  const dict = await getDictionary(lang);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">

      <RenderResumeBasedOnDevice dict={dict} />

    </main>
  );
};