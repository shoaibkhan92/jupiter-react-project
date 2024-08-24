const features = [
  {
    image: "/src/assets/images/icons/rs-50-cashbak.png",
    heading: " Select where to earn 2% cashback",
    subheading: "Choose either shopping, dining, or travel for 2% cashback",
  },
  {
    image: "/src/assets/images/icons/edge-card-bill-xxxl.png",
    heading: " Pay with UPI or credit card",
    subheading:
      "Earn 2% cashback on your selected category and 0.4% on all other spends",
  },
  {
    image: "/src/assets/images/icons/edge-card-bill-xx-xl.png",
    heading: " Switch with 1-tap",
    subheading: "You can switch to a different category every 3 billing cycles",
  },
];
export default function WelcomeOffer() {
  return (
    <>
      <main className="">
        <div className="max-w-md mx-auto ">
          <section className="pt-24 px-4 bg-accent-primary">
            <div className="mb-9">
              <h2 className="text-[32px] font-medium leading-[40px] text-white mb-2.5">
                Get welcome rewards worth ₹250
              </h2>
              <p className="text-base font-normal text-dark-secondary">
                Make payments with your 3-in-1 Switch RuPay Credit Card to get
                rewarded
              </p>
            </div>
              {features.map((item, index) => (
            <div className="bg-white rounded-lg border border-tertiary border-b-[3px] p-4 mb-4">
                <div className="flex gap-4">
                  <img
                    src={item.image}
                    className="bg-no-repeat bg-cover w-[39px] h-[39px] inline-block"
                  />
                  <div>
                    <p className="text-lg font-bold leading-[26px] text-primary-black">
                    {item.heading}
                    </p>
                    <p className="text-xs font-normal leading-[18px] text-secondary-black">
                    {item.subheading}
                    </p>
                  </div>
                </div>
            </div>
              ))}
              <p className="text-xs font-semibold text-dark-secondary pb-10">Note: ₹50 cashback is credited as Jewels. You can redeem it in cash later</p>
          </section>
        </div>
      </main>
    </>
  );
}
