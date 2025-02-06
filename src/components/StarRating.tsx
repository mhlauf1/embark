import { IoIosStar } from "react-icons/io";

const StarRating = ({
  rating,
  reviews,
}: {
  rating: number;
  reviews: number;
}) => {
  const stars = Array(5).fill(0);

  return (
    <div className="flex items-center gap-2">
      <div className="flex">
        {stars.map((_, index) => (
          <div key={index} className="relative">
            <IoIosStar className="text-gray-300" size={20} />
            {rating > index && (
              <IoIosStar
                className="absolute top-0 left-0 text-yellow-400 overflow-hidden"
                size={20}
                style={{
                  clipPath: `inset(0 ${Math.max(
                    0,
                    (index + 1 - rating) * 100
                  )}% 0 0)`,
                }}
              />
            )}
          </div>
        ))}
      </div>
      <span className="text-gray-700">
        {rating} ({reviews})
      </span>
    </div>
  );
};

export default StarRating;
