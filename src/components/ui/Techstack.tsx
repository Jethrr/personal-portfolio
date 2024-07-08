interface TechStackProps {
  imgURL: string;
  name: string;
}

const Techstack: React.FC<TechStackProps> = ({ imgURL, name }) => {
  return (
    <div className="flex items-center justify-center p-5">
      <div className="tech-img w-12">
        <img src={imgURL} alt="name" />
      </div>

      <div className="tech-name font-semibold text-white text-3xl">
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default Techstack;
