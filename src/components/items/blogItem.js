import ArrowRight from "../../images/icons/arrow-right.svg";

const BlogItem = () => {
  return (
    <>
      <div className="rounded-[20px] bg-[#fff] w-[230px] drop-shadow-md min-h-[350px]">
        <div className="h-60 linearGradient rounded-t-[20px]  relative">
          <div className="absolute bottom-2.5 left-2.5 flex justify-between items-center rounded-full text-white  px-1 py-1 border border-solid border-white">
            <button className=" px-4 text-sm text-center">خواندن</button>
            <span className="py-1 px-1 w-6 h-6 bg-white rounded-full text-center w-1/6">
              <img src={ArrowRight} alt="arrow" />
            </span>
          </div>
        </div>
        <div className="mb-8 py-4 px-4">
          <p className="text-lg font-semibold text-[#000] mb-2">عنوان</p>
          <p className="text-xs text-[#5E5B63] mb-2">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogItem;
