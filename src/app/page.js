import { NumberInput } from "@/components/ui/numberInput";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans dark:bg-[#222]">
      <div className="bg-amber-600 rounded px-3 py-2 flex items-center justify-center">
        <NumberInput/>
      </div>
    </div>
  );
}
