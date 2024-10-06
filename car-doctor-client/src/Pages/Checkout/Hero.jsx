
const Hero = () => {
  return (
    <div
      className="hero "
      style={{
        backgroundImage:
          "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}
    >
      <div className="hero-overlay bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-orange-400">Check Out</h1>
          
          <button className="">Home/checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
