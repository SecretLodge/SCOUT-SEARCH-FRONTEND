import Logo from "./Logo";
import Menu from "./Menu";

export default function Header(props: {
  toggleChat: () => void;
  isChat: string;
}) {
  return (
    <>
      <Menu toggleChat={props.toggleChat} isChat={props.isChat} />
    </>
  );
}
