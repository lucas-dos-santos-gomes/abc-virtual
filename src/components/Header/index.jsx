import Image from "next/image";
import Button from './style';

export default function Header() {
  return (
    <header>
      <Image width={100} height={100} src="/svg/logo.svg" alt="logo" />
      <Button>Clique em mim!</Button>
    </header>
  );
}
