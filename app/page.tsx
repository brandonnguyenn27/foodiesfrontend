import Capture from "@/components/pages/home/Capture";
import JoinHome from "@/components/pages/home/JoinHome";
import Welcome from "@/components/pages/home/Welcome";
import Header from "@/components/ui/header";
import Separator from "@/components/ui/separator";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />

      <main className="flex justify-center items-center">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <Welcome />
          <Separator />
          <Capture />
          <JoinHome />
        </section>
      </main>
    </>
  );
}
