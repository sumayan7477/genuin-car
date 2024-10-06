import Parts from "../../../assets/images/about_us/parts.jpg";
import person from "../../../assets/images/about_us/person.jpg";

const About = () => {
  return (
    <div>
      <div className="hero  min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:w-1/2 relative">
            <img src={person} className="max-w-sm rounded-lg shadow-2xl " />
            <img src={Parts} className="max-w-sm rounded-lg shadow-2xl absolute lg:top-1/2 lg:right-24 w-64 border border-8 border-white" />
          </div>

          <div className="lg:w-1/2">
          <p className="text-orange-500">About Us </p>
            <h1 className="text-5xl font-bold">
            We are qualified & of experience in this field!</h1>
            <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which  look even slightly believable. 
            </p>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised words which look even slightly believable. </p>
            <button className="btn bg-orange-400">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
