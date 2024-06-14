import Image from "next/image";
import SectionStyled from "./style";

export default function Section({ title, text, img, ...props }) {
  return (
    <SectionStyled {...props}>
      <div>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      <Image width={300} height={300} src={img} alt={img} />
    </SectionStyled>
  );
}
