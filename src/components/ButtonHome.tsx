interface pressButton {
  pressButton: () => void;
}

export default function ButtonHome(props: pressButton) {
  return (
    <div className="mt-[90px] text-center">
      <button
        onClick={() => props.pressButton()}
        className="rounded-[14px] bg-blue-10 px-[45px] py-[15px] font-medium text-white duration-500 hover:shadow-blue-10"
      >
        START
      </button>
    </div>
  );
}
