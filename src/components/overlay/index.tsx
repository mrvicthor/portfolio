type Props = {
  handleClick: () => void;
};

const Overlay = ({ handleClick }: Props) => {
  return <div className="overlay" onClick={handleClick} />;
};

export default Overlay;
