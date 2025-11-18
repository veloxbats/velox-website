import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden">
      {/* Soft black gradient edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/[0.02] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/[0.02] via-transparent to-black/[0.02] pointer-events-none" />

      {/* Abstract cricket motion effect in grey - soft swirls */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-gradient-to-bl from-grey-100 to-transparent opacity-30 blur-3xl" />
      <div className="absolute left-1/4 bottom-1/4 w-80 h-80 bg-gradient-to-tr from-grey-50 to-transparent opacity-20 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between min-h-screen">
        {/* Left side - Text content */}
        <div className="flex-1 flex flex-col justify-center space-y-8">
          <div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black leading-tight tracking-tight">
              Unleash Your
              <br />
              Power
            </h1>
          </div>

          <p className="text-lg sm:text-xl text-black/70 max-w-md leading-relaxed">
            Performance-engineered cricket bats crafted for power, precision, and control.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <Link
              to="/explore"
              className="px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-black/90 transition-colors"
            >
              Explore Bats
            </Link>
            <Link
              to="/shop"
              className="px-8 py-3 border-2 border-black text-black font-semibold rounded-lg hover:bg-black/5 transition-colors"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Right side - Floating cricket bat image */}
        <div className="hidden lg:flex flex-1 items-center justify-center relative">
          <div className="relative w-full max-w-md aspect-square">
            {/* Soft shadow effect */}
            <div className="absolute inset-0 rounded-full bg-black/5 blur-3xl" />

            {/* Floating bat with subtle animation */}
            <div className="relative h-full w-full flex items-center justify-center animate-pulse">
              <div className="w-full h-full bg-gradient-to-br from-grey-50 to-grey-100 rounded-2xl flex items-center justify-center shadow-xl">
                {/* Placeholder for premium cricket bat */}
                <div className="text-center space-y-4">
                  <div className="text-6xl">🏏</div>
                  <p className="text-sm text-black/50">Premium Cricket Bat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile bat image */}
      <div className="lg:hidden w-full mt-8 px-4">
        <div className="relative w-full aspect-video bg-gradient-to-br from-grey-50 to-grey-100 rounded-2xl flex items-center justify-center shadow-lg">
          <div className="text-center space-y-2">
            <div className="text-5xl">🏏</div>
            <p className="text-xs text-black/50">Premium Cricket Bat</p>
          </div>
        </div>
      </div>
    </section>
  );
};
