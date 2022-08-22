import Image from "next/image";

export const PrimaryButton = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`btn primaryBtn ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export const SecondaryButton = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`btn secondaryBtn ${props.className}`}
    >
      <Image src="/assets/lock.svg" alt="lock" width={14} height={14} />
      {props.children}
    </button>
  );
};
