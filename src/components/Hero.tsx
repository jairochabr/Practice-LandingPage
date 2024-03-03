import HeroImg from '../assets/hero-img.png';
import MagnifyingGlass from '../assets/MagnifyingGlass.svg';

export function Hero() {
  return (
    <div className="w-full bg-white py-24">
      <div className="md:max-w-[1420px] m-auto grid md:grid-cols-2 max-w-[600px] px-4 md:px-0">
        <div className="flex flex-col justify-start gap-4">
          <p className="uppercase text-[#20B486] text-2xl font-semibold py-2">
            Start to success
          </p>
          <h1 className="md:leading-[72px] text-[#06241B] md:text-6xl text-5xl font-semibold py-2">
            Access To <span className="text-[#20B486]">5000+</span> Courses from{' '}
            <span className="text-[#20B486]">300</span> Instructors &
            Institutions
          </h1>
          <p className="text-lg text-[#6D737A] py-2">
            Various versions have evolved over the years, sometimes by accident,
          </p>

          <form action="#" className="flex">
            <input
              className="bg-white text-[#6D737A] min-w-[648px] p-4 input-box-shadow rounded-md flex justify-between shadow-lg"
              type="text"
              placeholder="What do want to learn?"
            />
            <button>
              <img className="" src={MagnifyingGlass} alt="Magnifying Glass" />
            </button>
          </form>
        </div>
        <img src={HeroImg} alt="heroImg" className="md:order-last  order-first" />
      </div>
    </div>
  );
}
