const features = [
  {
    id: 1,
    heading: " Select where to earn 2% cashback",
    subheading: "Choose either shopping, dining, or travel for 2% cashback",
  },
  {
    id: 2,
    heading: " Pay with UPI or credit card",
    subheading:
      "Earn 2% cashback on your selected category and 0.4% on all other spends",
  },
  {
    id: 3,
    heading: " Switch with 1-tap",
    subheading: "You can switch to a different category every 3 billing cycles",
  },
];
export default function Explore() {
  return (
    <>
      <main>
        <div className="max-w-md mx-auto">
          <section className="bg-[#000000] py-6">
            <div className="text-center items-center flex flex-col pt-7 px-5 mb-4">
              <p className="text-sm font-semibold leading-[22px] tracking-[-0.04em] text-white mb-1.5">
                3-in-1 Switch Credit Card
              </p>
              <div className="relative">
                <h2 className="text-[32px] font-medium leading-10 text-[#FFE7AD]">
                  2% cashback
                </h2>

                <span
                  style={{
                    backgroundImage: "url(/src/assets/images/icons/star.png)",
                  }}
                  className="bg-no-repeat bg-cover w-3.5 h-3.5 absolute inline-block top-px -right-4"
                ></span>
              </div>
              <p className="text-xs font-normal leading-[18px] text-[#FFFFFFB8]">
                on the category of your choice
              </p>
            </div>
            <div className="flex items-center justify-center gap-8 pb-3">
              <div className="flex">
                <span
                  style={{
                    backgroundImage: "url(/src/assets/images/icons/travel.png)",
                  }}
                  className="bg-no-repeat bg-cover w-[18px] h-5 inline-block"
                ></span>
                <p className="text-xs font-normal leading-[18px] text-[#FFFFFFB8] pl-1">
                  Travel
                </p>
              </div>
              <div className="flex">
                <span
                  style={{
                    backgroundImage:
                      "url(/src/assets/images/icons/shopping.png)",
                  }}
                  className="bg-no-repeat bg-cover w-[18px] h-5 inline-block"
                ></span>
                <p className="text-xs font-normal leading-[18px] text-white pl-1">
                  Shopping
                </p>
              </div>
              <div className="flex">
                <span
                  style={{
                    backgroundImage: "url(/src/assets/images/icons/dining.png)",
                  }}
                  className="bg-no-repeat bg-cover w-[18px]  h-5 inline-block"
                ></span>
                <p className="text-xs font-normal leading-[18px] text-[#FFFFFFB8] pl-1">
                  Dining
                </p>
              </div>
            </div>
          </section>
          <section className="bg-[#F5F3EF] p-4">
            <div>
              <div className="bg-white border border-[#2B2D331F] border-b-[3px] rounded overflow-hidden mb-4">
                <div className="flex items-center py-4 px-5 gap-3">
                  <span
                    style={{
                      backgroundImage:
                        "url(/src/assets/images/icons/assured-cashback.png)",
                    }}
                    className="bg-no-repeat bg-cover w-9 h-9 inline-block"
                  ></span>
                  <div>
                    <p className="text-lg font-bold leading-[26px] text-[#313339]">
                      Assured cashback
                    </p>
                    <span className="text-sm font-normal text-[#767676]">
                      on all UPI & credit card spends
                    </span>
                  </div>
                </div>
                <div className="bg-[#EBF1F0] text-center p-2.5">
                  <p className="text-xs font-semibold text-[#357065]">
                    Earn up to ₹36,000 every year
                  </p>
                </div>
              </div>
              <div className="flex justify-between mb-4">
                <div className="w-1/2 bg-white border border-[#2B2D331F] border-b-[3px] rounded p-4">
                  <span
                    style={{
                      backgroundImage:
                        "url(/src/assets/images/icons/lifetime-free-credit-card.png)",
                    }}
                    className="bg-no-repeat bg-cover w-9 h-9 inline-block"
                  ></span>
                  <p className="text-base font-bold text-[#313339]">
                    Lifetime free <br />
                    credit card
                  </p>
                  <span className="text-sm font-normal text-[#767676]">
                    ₹0 joining fee <br />
                    ₹0 annual fee
                  </span>
                </div>
                <div className="w-1/2 bg-white border border-[#2B2D331F] border-b-[3px] rounded p-4 ml-4">
                  <span
                    style={{
                      backgroundImage:
                        "url(/src/assets/images/icons/welcome-voucher.png)",
                    }}
                    className="bg-no-repeat bg-cover w-9 h-9 inline-block"
                  ></span>
                  <p className="text-base font-bold text-[#313339]">
                    ₹250 welcome <br />
                    voucher
                  </p>
                  <span className="text-sm font-normal text-[#767676]">
                    on Amazon, <br />
                    Swiggy, and more
                  </span>
                </div>
              </div>
              <p className="text-sm font-medium leading-4 text-center text-[#357065] mb-6">
                Get credit limit up to ₹3,00,000
              </p>
              <div className="bg-[#101112] rounded text-center mb-4">
                <button className="text-base font-extrabold leading-5 text-white p-5">
                  Button Label
                </button>
              </div>
              <div className="text-center items-center flex justify-center mb-12">
                <a
                  href=""
                  className="text-sm font-extrabold leading-4 text-[#313339] underline"
                >
                  Know more
                </a>
                <span
                  style={{
                    backgroundImage:
                      "url(/src/assets/images/icons/down-arro.png)",
                  }}
                  className="bg-no-repeat bg-cover w-4 h-3 inline-block ml-2"
                ></span>
              </div>
              <div className="pb-6">
                <h2 className="text-2xl font-medium text-[#313339] mb-4">
                  How does Switch work?
                </h2>
                <div className="bg-white border border-[#2B2D331F] border-b-[3px] p-3 rounded">
                  {features.map((item, index) => (
                    <div key={index} className={`flex gap-3 ${index !== features.length - 1 ? 'mb-4' : ''}`}>
                      <div className="flex bg-[#357065] rounded-tl rounded-bl w-8 flex-shrink-0">
                        <span className="text-base font-extrabold leading-5 text-white m-auto">
                          {item.id}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold leading-[22px] text-[#313339] mb-1.5">
                          {item.heading}
                        </p>
                        <p className="text-xs font-normal leading-[18px] text-[#767676]">
                          {item.subheading}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
