import { FootPage } from "@/components/ui/footPage";
import { NumberInput } from "@/components/ui/numberInput";

export default function Home() {
  return (
    <>
      <div className="flex min-h-[95.5vh] items-center justify-center font-sans dark:bg-[#222]">
        <div className="bg-amber-600 h-50 w-150 rounded px-3 py-2 flex items-center justify-center">
          <NumberInput />
        </div>
      </div>
      <FootPage/>
    </>
  );
}
