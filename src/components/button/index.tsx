interface ButtonProps {
  styles: string;
  name: string;
  handleClick: () => void;
}

const Button = ({ styles, name, handleClick }: ButtonProps) => {
  return (
    <button className={styles} onClick={() => handleClick}>
      {name}
    </button>
  );
};

export default Button;
