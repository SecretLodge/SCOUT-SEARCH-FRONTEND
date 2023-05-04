import Logo from "./Logo";
import Menu from "./Menu";

export default function Header(props: { toggleChat: () => void }) {
  return (
    <>
      <Menu toggleChat={props.toggleChat} />
    </>
  );
}
