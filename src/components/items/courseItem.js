import Buy from "../../images/icons/next.svg";

const CourseItem = () => {
  return (
    <>
      <div className="rounded-[20px] bg-[#fff] w-[190px] drop-shadow-md  py-4 px-4 my-2">
        <div>
          <p className="text-lg font-bold text-[#000]">Professional</p>
          <p className="text-md font-normal text-[#606060]">حرفه ای</p>
        </div>
        <div className="my-6">
          <p className="text-xs text-[#5E5B63] mb-2">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.
          </p>
        </div>
        <div className="flex justify-between items-end mb-2">
          <div>
            <p className="text-xs  text-[#8038E3] mb-1">قیمت</p>
            <p className="text-xs font-normal text-[#5E5B63]">
              1.000.000 تومان
            </p>
          </div>
          <div>
            <img className="w-6 h-6" src={Buy} alt="buy the course" />
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseItem;
