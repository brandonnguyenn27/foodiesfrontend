import { Button } from "@/components/ui/button";

export default function JoinHome() {
  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 ">
        <div className=" grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Join the Foodies Community
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Connect with fellow food enthusiasts, discover new dishes, and
              share your culinary adventures. Sign up today and start exploring
              the world of Foodies.
            </p>
          </div>
          <Button />
        </div>
      </section>
    </div>
  );
}
