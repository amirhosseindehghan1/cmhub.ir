import ArrowRight from "../../images/icons/arrow-right.svg";

const FeatureItem = ({ number }) => {
  return (
    <>
      <div className="rounded-[20px] bg-[#fff] md:w-[330px] sm:w-[280px] w-[190px] drop-shadow-md sm:py-8 xs:py-4 xs:px-4 p-2">
        <div className="flex justify-between items-end s:mb-6 mb-3">
          <p className="font-semibold md:text-2xl sm:text-xl text-base">
            ویژگــــی
          </p>
          <div className="flex justify-center items-center sm:w-10 w-6 sm:h-10 h-6 rounded-full bg-[#9348F8] md:text-lg text-sm text-[#fff] ">
            <span>{number}</span>
          </div>
        </div>
        <div>
          <p className="text-[#5E5B63] md:text-lg sm:text-sm text-xs">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.
          </p>
        </div>
      </div>
    </>
  );
};

export default FeatureItem;
