const CardData = ({ items }) => {
  console.log("Card Data----------->", items);

  const { name, picture, days_since_contact, status, tags } = items;

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-64 text-center">

      {/* Profile Image */}
      <div className="flex justify-center">
        <img
          src={picture}
          alt={name}
          className="w-20 h-20 rounded-full "
        />
      </div>

      {/* Name */}
      <h2 className="text-2xl font-bold text-gray-800 mt-4">
        {name}
      </h2>

      {/* Days */}
      <p className="text-gray-400 mt-1">
        {days_since_contact}d ago
      </p>

      {/* Tags */}
      <div className="flex justify-center gap-2 mt-4 flex-wrap">

        {
          tags.map((tag, index) => (
            <span
              key={index}
              className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full uppercase"
            >
              {tag}
            </span>
          ))
        }

      </div>

      {/* Status */}
      <div className="mt-4">
        <span
          className={`
            px-4 py-1 rounded-full text-sm font-semibold text-white
            ${
              status === "overdue"
                ? "bg-red-500"
                : status === "almost due"
                ? "bg-yellow-500"
                : "bg-green-500"
            }
          `}
        >
          {status}
        </span>
      </div>

    </div>
  );
};

export default CardData;