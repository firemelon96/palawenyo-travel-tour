import QRCode from "react-qr-code";

type Props = {
  url: string;
  name: string;
  price: number;
};

export const QrGenerator = ({ name, price, url }: Props) => {
  const text = `I am Interested in ${name}, with price ${price}`;
  const encodedText = encodeURI(text);
  const link = `${url}?text=${encodedText}`;
  return <QRCode value={link} size={80} />;
};
