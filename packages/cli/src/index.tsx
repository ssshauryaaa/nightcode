import { useState } from "react";
import { createCliRenderer } from "@opentui/core";
import { createRoot } from "@opentui/react";
import { Header } from "./components/header";
import { InputBar } from "./components/InputBar";

function App() {
  const [lastPrompt, setLastPrompt] = useState<string | null>(null);

  return (
    <box
      alignItems="center"
      justifyContent="center"
      backgroundColor="#0D0D12"
      width="100%"
      height="100%"
      gap={0.5}
    >
      <Header />
      <box width="100%" maxWidth={78} paddingX={2} gap={1}>
        {lastPrompt != null && (
          <box
            border={["all"]}
            borderColor="#333355"
            paddingX={2}
            paddingY={1}
            width="100%"
          >
            <text fg="#aaaacc" wrapMode="word">
              {lastPrompt}
            </text>
          </box>
        )}
        <InputBar onSubmit={(text) => setLastPrompt(text)} />
      </box>
    </box>
  );
}

const renderer = await createCliRenderer({
  targetFps: 60,
  exitOnCtrlC: false,
});
createRoot(renderer).render(<App />);
