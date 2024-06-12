import CustomLink from "@/components/link";

export default function Home() {
  return (
    <main className="w-full h-screen bg-white flex justify-center items-center">
      <div className="w-[320px] h-[500px] bg-gray-200 rounded-lg flex flex-col items-center p-2">
        <h1 className="text-black mb-8"></h1>
        <div className="w-full flex flex-col gap-4">
          <CustomLink title="Website" url="https://esparta.io" />
          <CustomLink title="Instagram" url="https://esparta.io" />
          <CustomLink title="Facebook" url="https://esparta.io" />
        </div>
      </div>
    </main>
  );
}
