import { Link, useLoaderData, useParams } from "react-router";

const EachCardDetails = () => {
  const params = useParams();
  const details = useLoaderData();

  // console.log("Details in EachCardDetails---------->", details);
  // console.log("Params in EachCardDetails---------->", params);

  const singleData = details.find((data) => data.id === parseInt(params.id));
  //    console.log("Single Data in EachCardDetails---------->", singleData);


  const formattedDate = new Date(singleData.next_due_date)
  .toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });


  return (

    <div className="min-h-screen  bg-[#F5F7F8] p-5 md:px-35 ">
        <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="space-y-2">
            <div className="bg-white rounded-2xl shadow-sm p-3 text-center">
              <div className="w-24  rounded-full bg-gray-200 mx-auto">
                <img
                  src={singleData.picture}
                  alt={singleData.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h1 className="text-3xl font-bold text-[#1F2937] mt-2">
                {singleData.name}
              </h1>

              <div className="flex justify-center gap-2 flex-wrap mt-2">
                {singleData.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-green-100 text-[#244D3F] px-2 py-1 rounded-full text-sm uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-3">
                <span
                  className={`
                  px-5 py-2 rounded-full text-white font-semibold
                  ${
                    singleData.status === "overdue"
                      ? "bg-red-500"
                      : singleData.status === "almost due"
                        ? "bg-yellow-500"
                        : "bg-green-500"
                  }
                `}
                >
                  {singleData.status}
                </span>
              </div>

              <p className="text-gray-500 italic mt-2">"{singleData.bio}"</p>

              <p className="text-gray-500 mt-2">{singleData.email}</p>
            </div>

            <button className="w-full bg-white  rounded-xl py-4 flex items-center justify-center gap-2">
              <img src="/public/assets/BellSimpleZ.svg" />
              Snooze 2 Weeks
            </button>

            <button className="w-full bg-white  rounded-xl py-4 flex items-center justify-center gap-2">
              <img src="/public/assets/Archive.svg" />
              Archive
            </button>

            <button className="w-full bg-white rounded-xl py-4 text-red-500 flex items-center justify-center gap-2">
              <img src="/public/assets/Trash.svg" />
              Delete
            </button>
          </div>

          <div className="space-y-5">
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white rounded-2xl shadow-sm p-7 text-center">
                <h1 className="text-4xl font-bold text-[#244D3F]">
                  {singleData.days_since_contact}
                </h1>

                <p className="text-gray-500 mt-2">Days Since Contact</p>
              </div>

              <div className="bg-white rounded-2xl shadow-sm p-7 text-center">
                <h1 className="text-4xl font-bold text-[#244D3F]">
                  {singleData.goal}
                </h1>

                <p className="text-gray-500 mt-2">Goal (Days)</p>
              </div>

              <div className="bg-white rounded-2xl shadow-sm p-5 text-center ">
                <h1 className="text-2xl font-bold text-[#244D3F]">
                  {formattedDate}
                </h1>

                <p className="text-gray-500 mt-2">Next Due</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-7">
              <div className="flex justify-between items-center">
                <h1 className="text-xl font-semibold text-[#1F2937]">
                  Relationship Goal
                </h1>

                <button className="btn btn-sm">Edit</button>
              </div>

              <p className="text-gray-500 mt-5">
                Connect every
                <span className="font-bold text-[#244D3F]">
                  {" "}
                  {singleData.goal} days
                </span>
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-5">
              <h1 className="text-xl font-semibold text-[#1F2937] mb-5">
                Quick Check-In
              </h1>

              <div className="grid grid-cols-3 gap-4 ">
                <Link className="flex flex-col justify-center space-y-2 items-center rounded-xl py-6 bg-gray-200">
                  <img src='/public/assets/call.png' className="h-[20px] w-[20px]"/>
                   <h1>Call</h1>
                </Link>

                <Link className="flex flex-col justify-center space-y-2 items-center rounded-xl py-6 bg-gray-200">
                  <img src='/public/assets/text.png' className="h-[20px] w-[20px]"/>
                  <h1>Text</h1>
                </Link>

                <Link className="flex flex-col justify-center space-y-2 items-center rounded-xl py-6 bg-gray-200">
                  <img src='/public/assets/video.png' className="h-[20px] w-[20px]"/>
                  <h1>Video</h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default EachCardDetails;
