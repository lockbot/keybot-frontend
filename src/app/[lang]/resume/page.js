import {RenderResumeBasedOnDevice} from "/src/app/[lang]/resume/components/deviceRendererResume";
import {getDictionary} from "/src/app/[lang]/dictionaries";

export const metadata = {
  title: '',
  description: '',
}

export default async function Resume({ params: { lang } }) {
  const dict = await getDictionary(lang);
  metadata.title = `Lucas Borges - ${dict.main_button.resume.name1}`;
  metadata.description = `Lucas Borges - ${dict.main_button.resume.name2}`;
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">

      <RenderResumeBasedOnDevice dict={dict} />

    </main>
  );
};