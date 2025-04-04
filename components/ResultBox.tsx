// components/ResultBox.tsx
interface ResultBoxProps {
  puan: number | null;
}

export default function ResultBox({ puan }: ResultBoxProps) {
  if (puan === null) return null;

  return (
    <div className="text-center font-semibold text-green-700">
      Yaklaşık AGS - DİKAB Puanınız: <span className="text-lg">{puan} puan</span>
    </div>
  );
}
