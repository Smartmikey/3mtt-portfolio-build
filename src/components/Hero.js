import { EnvelopeIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";

const Hero = () => {
  return (
    <div>
      <div className="flex space-x-6 items-center my-8">
        <div className="rounded-full p-1 border-4 border-primary-green">
          <img
            className="w-28 h-28 rounded-full"
            src="/images/passport.jpg"
            alt="developer's picture"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold">Michael Abah</h1>
          <h2>Fullstack software engineer, DevOps Engineer</h2>
          <div className="flex space-x-3 my-2">
            <EnvelopeIcon className="h-6 cursor-pointer" />
            <EnvelopeIcon className="h-6 cursor-pointer" />
            <EnvelopeIcon className="h-6 cursor-pointer" />
            <EnvelopeIcon className="h-6 cursor-pointer" />
          </div>
        </div>
      </div>

      <div>
        <button className="btn-solid flex space-x-2"> Download CV <ArrowDownTrayIcon className="h-6 cursor-pointer" /></button>
        <EnvelopeIcon className="h-6 cursor-pointer" />
      </div>
    </div>
  );
};

export default Hero;
