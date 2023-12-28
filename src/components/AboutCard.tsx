import Image from "next/image";

export default function AboutCard() {
  return (
    <div className="relative col-span-3 aspect-square md:aspect-auto md:row-span-2 rounded-3xl overflow-hidden bg-slate-700">
      <div className="h-full md:w-8/12 absolute top-0 left-0 p-4 md:p-8 flex flex-col justify-start  md:justify-end">
        <h1 className="text-3xl md:text-xl lg:text-5xl font-bold text-white mb-4 md:mb-5">
          Ariel Ignacio Jimenez
        </h1>
        <p className="text-md md:text-lg lg:text-2xl text-white">bla vla bla</p>
      </div>
    </div>
  );
}
