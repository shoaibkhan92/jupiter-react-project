const features = [
  {
    image: "/src/assets/images/icons/rs-50-cashbak.png",
    heading: " ₹50 cashback on your 1st UPI payment",
    subheading: "Activate UPI on your credit card and make a merchant payment",
  },
  {
    image: "/src/assets/images/icons/edge-card-bill-xxxl.png",
    heading: " ₹50 cashback on your 1st card swipe",
    subheading:
      "Activate your physical credit card and pay in-store or online",
  },
  {
    image: "/src/assets/images/icons/edge-card-bill-xx-xl.png",
    heading: " ₹150 voucher on spends of ₹15,000",
    subheading: "Claim a voucher from Swiggy, Amazon, and more top brands",
  },
];
export default function WelcomeRewardsr() {
  return (
    <>
        <div className="max-w-md mx-auto ">
          <section className="pt-24 px-4 bg-accent-primary">
            <div className="mb-9">
              <h2 className="text-t32 font-medium leading-10 text-white mb-2.5">
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
                    <p className="text-lg font-bold leading-l-26 text-primary-black">
                    {item.heading}
                    </p>
                    <p className="text-xs font-normal leading-l-18 text-secondary-black">
                    {item.subheading}
                    </p>
                  </div>
                </div>
            </div>
              ))}
              <p className="text-xs font-semibold text-dark-secondary pb-10">Note: ₹50 cashback is credited as Jewels. You can redeem it in cash later</p>
          </section>
        </div>
    </>
  );
}
