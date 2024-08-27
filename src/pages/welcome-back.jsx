const features = [
  {
    image: "/src/assets/images/icons/travel.png",
    heading: " Travel",
  },
  {
    image: "/src/assets/images/icons/shopping.png",
    heading: " Shopping",
  },
  {
    image: "/src/assets/images/icons/dining.png",
    heading: " Dining",
  },
];
const cardsdata = [
  {
    image: "/src/assets/images/icons/green-satar.png",
    heading: "2% cashback on chosen category",
  },
  {
    image: "/src/assets/images/icons/green-satar.png",
    heading: "Cashback on all UPI & card spends",
  },
  {
    image: "/src/assets/images/icons/green-satar.png",
    heading: "Lifetime free no annual fee",
  },
  {
    image: "/src/assets/images/icons/green-satar.png",
    heading: "Welcome voucher worth ₹250",
  },
];

export default function WelcomeBack() {
  return (
    <>
      <div className="max-w-md mx-auto">
        <div
          style={{
            backgroundImage: `url("/src/assets/images/welcome-back.png")`,
          }}
          className="bg-no-repeat bg-cover w-full h-screen inline-block px-6"
        >
          <div className="text-center pt-10 mb-2">
            <p className="text-8 font-medium left-10 text-white mb-4">
              Welcome back, <br />
              Satvika!
            </p>
            <p className="text-sm font-semibold leading-5.5 text-white">
              3-in-1 Switch Credit Card
            </p>
          </div>
          <div className="px-8 pb-76.5">
            <div className="bg-light-bg rounded-3xl flex items-center justify-center gap-4 p-2">
              {features.map((item, index) => (
                <div className="flex">
                  <img src={item.image} className="w-5 h-5" />
                  <p className="text-xs font-normal leading-4.5 text-dark-secondary pl-1">
                    {item.heading}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-2 mb-4">
          {cardsdata.map((data, index) => (
            <div className="bg-beach border text-center border-tertiary border-b-3 rounded-lg py-2.5 px-3">
              <div className="flex text-left items-center gap-1">
                <img src={data.image} className="bg-no-repeat bg-contain w-3 h-3"
                />
                <p className="text-xs font-semibold text-primary-black">
                {data.heading}
                </p>
              </div>
            </div>
            ))}
          </div>
          <div className="bg-accent-alt-primary rounded text-center mb-4">
            <button className="text-base font-bold leading-5 py-3.5 text-white">
              Resume application
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
