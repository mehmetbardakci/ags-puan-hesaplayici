// app/page.tsx
"use client";

import { useState } from "react";
import InputField from "@/components/inputfield";
import SubmitButton from "@/components/SubmitButton";
import ResultBox from "@/components/ResultBox";

export default function Home() {
  const [puan, setPuan] = useState<number | null>(null);

  const hesapla = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const turkce = parseFloat(form.turkce.value) || 0;
    const matematik = parseFloat(form.matematik.value) || 0;
    const tarih = parseFloat(form.tarih.value) || 0;
    const cografya = parseFloat(form.cografya.value) || 0;
    const egitim = parseFloat(form.egitim.value) || 0;
    const mevzuat = parseFloat(form.mevzuat.value) || 0;
    const oabt = parseFloat(form.oabt.value) || 0;

    const toplam =
      (turkce / 15) * 5 +
      (matematik / 15) * 5 +
      (tarih / 10) * 5 +
      (cografya / 8) * 5 +
      (egitim / 24) * 20 +
      (mevzuat / 8) * 10 +
      (oabt / 50) * 50;

    setPuan(parseFloat(toplam.toFixed(2)));
  };

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <form
        onSubmit={hesapla}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-4 text-zinc-900"
      >
        <h1 className="text-2xl font-bold text-center mb-4">
          AGS - DİKAB Puan Hesaplayıcı
        </h1>

        <InputField id="turkce" label="Türkçe Net (15 soru):" max={15} />
        <InputField id="matematik" label="Matematik Net (15 soru):" max={15} />
        <InputField id="tarih" label="Tarih Net (10 soru):" max={10} />
        <InputField id="cografya" label="Coğrafya Net (8 soru):" max={8} />
        <InputField
          id="egitim"
          label="Eğitim Bilimleri Net (24 soru):"
          max={24}
        />
        <InputField id="mevzuat" label="Mevzuat Net (8 soru):" max={8} />
        <InputField id="oabt" label="ÖABT Net (50 soru):" max={50} />

        <SubmitButton />

        {puan !== null && <ResultBox puan={puan} />}
      </form>
    </main>
  );
}
