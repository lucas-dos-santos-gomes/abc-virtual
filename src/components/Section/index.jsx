import Image from "next/image";
import SectionStyled from "./style";

export default function Section({ text, img, left }) {
  return (
    <SectionStyled left={left}>
      <h1>{text}</h1>
      <Image width={200} height={200} src={img} alt={img} />
    </SectionStyled>
  );
}
