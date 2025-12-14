const OverviewCard = ({ overviewCard }) => {
    return (
      <div className="overviewCard bg-blueWhite p-3 rounded-full mb-4 lg:mb-4 flex flex-row gap-8 items-center">
        <div className="number rounded-full bg-primaryBlue justify-center items-center py-1 px-2 lg:py-2 lg:px-4">
          <h2 className="text-whiteColor text-[20px] lg:text-[28px] font-bold">{overviewCard.number}</h2>
        </div>

        <div>
          <h2 className="text-[16px] lg:text-[20px] font-bold">
            {overviewCard.title}
          </h2>
          <p className="text-[12px] lg:text-[16px] leading-tight">
            {overviewCard.description}
          </p>
        </div>
      </div>
    );
 }
export default OverviewCard;