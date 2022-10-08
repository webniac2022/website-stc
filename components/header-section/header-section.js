const HeaderSection = ({ title }) => {
  return (
    <div className="mt-10 mb-10 p-2">
      <h2 className="font-bold text-textColors-600 xs:text-5xl sm:text-8xl">
        {title}
      </h2>
    </div>
  );
};

export default HeaderSection;
