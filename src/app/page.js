import { NumberInput } from "@/components/ui/numberInput";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center font-sans dark:bg-[#222]">
      <div>
        
      </div>
      <NumberInput typeOfCounter={"Hours"}/>
      <NumberInput typeOfCounter={"Minutes"}/>
      <NumberInput typeOfCounter={"Seconds"}/>
    </div>
  );
}
