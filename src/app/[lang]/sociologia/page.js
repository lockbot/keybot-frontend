import {RenderSociologiaBasedOnDevice} from "./components/deviceRendererSociologia";
import {getDictionary} from "/src/app/[lang]/dictionaries";

export const metadata = {
  title: 'Lucas Borges Currículo',
  description: 'Currículo',
}

export default async function Resume({ params: { lang } }) {
  const dict = await getDictionary(lang);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">

      <RenderSociologiaBasedOnDevice dict={dict} />

    </main>
  );
};