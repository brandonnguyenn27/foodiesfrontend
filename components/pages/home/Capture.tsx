export default function Capture() {
  return (
    <>
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none"></h4>
        <p className="text-sm text-gray-500 dark:text-gray-400"></p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
        <div className="grid grid-cols-2 gap-4">
          <img
            src="/placeholder.svg"
            width="300"
            height="200"
            alt="Food 1"
            className="rounded-xl object-cover"
          />
          <img
            src="/placeholder.svg"
            width="300"
            height="200"
            alt="Food 2"
            className="rounded-xl object-cover"
          />
          <img
            src="/placeholder.svg"
            width="300"
            height="200"
            alt="Food 3"
            className="rounded-xl object-cover"
          />
          <img
            src="/placeholder.svg"
            width="300"
            height="200"
            alt="Food 4"
            className="rounded-xl object-cover"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Capture and Catalog Your Culinary Adventures
          </h2>
          <p className="text-gray-500 md:text-xl dark:text-gray-400">
            With Foodies, you can easily post photos of your favorite dishes and
            add labels to remember the details. Build a personal catalog of your
            top eats and share them with friends.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row"></div>
        </div>
      </div>
    </>
  );
}
