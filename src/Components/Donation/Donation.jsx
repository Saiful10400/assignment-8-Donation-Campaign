import DonationCart from "./DonationCart";


const Donation = () => {
  let localstorageData = localStorage.getItem("cart");
  if (localstorageData) {
    localstorageData = JSON.parse(localstorageData);
    localstorageData=localstorageData.slice(0,3)
  } else {
    localstorageData = [];
  }

  return (
    <>
      <div className={localstorageData.length<1 ? "hidden" : "block"}>
        <div className="grid grid-cols-2 gap-6 ">
          {localstorageData.map((item, idx) => (
            <DonationCart key={idx} data={item}></DonationCart>
          ))}
        </div>

        <div className="text-center">
          <button className="btn bg-green-600 text-xl  font-semibold text-white">
            see all
          </button>
        </div>
      </div>

      <div className={localstorageData.length<1 ? "block" : "hidden"}>
        <div className="w-full h-[50vh] flex justify-center items-center">
        <h1 className="text-6xl font-bold">You have not donated yet.</h1>
        </div>
      </div>
    </>
  );
};

export default Donation;
