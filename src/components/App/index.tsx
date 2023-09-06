import reactLogo from "@/assets/react.svg";

export default function App() {
  return (
    <div className="flex h-screen w-screen items-center justify-center gap-4">
      <a href="https://vitejs.dev" rel="noopener" target="_blank">
        <img alt="Vite logo" src="/vite.svg" />
      </a>

      <a href="https://react.dev" rel="noopener" target="_blank">
        <img alt="React logo" src={reactLogo} />
      </a>
    </div>
  );
}
