const HeroSection = () => {
  return (
    <div className="mt-5 w-12/13 mx-auto sm:w-11/12">
      <div className="min-h-screen bg-[#F7F8FA] flex flex-col items-center pt-16 px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#1F2937]">
            Friends to keep close in your life
          </h1>

          <p className="text-sm text-gray-500 mt-3 max-w-xl">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>

          <button className="btn bg-[#244D3F] hover:bg-[#1d3e32] text-white border-none mt-6">
            + Add a Friend
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14 w-full max-w-5xl">
          <div className="bg-white  rounded-lg py-6 text-center shadow-sm">
            <h2 className="text-3xl font-bold text-[#244D3F]">10</h2>
            <p className="text-sm text-gray-500 mt-2">Total Friends</p>
          </div>

          <div className="bg-white  rounded-lg py-6 text-center shadow-sm">
            <h2 className="text-3xl font-bold text-[#244D3F]">3</h2>
            <p className="text-sm text-gray-500 mt-2">On Track</p>
          </div>

          <div className="bg-white  rounded-lg py-6 text-center shadow-sm">
            <h2 className="text-3xl font-bold text-[#244D3F]">6</h2>
            <p className="text-sm text-gray-500 mt-2">Need Attention</p>
          </div>

          <div className="bg-white  rounded-lg py-6 text-center shadow-sm">
            <h2 className="text-3xl font-bold text-[#244D3F]">12</h2>
            <p className="text-sm text-gray-500 mt-2">
              Interactions This Month
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
