'use client';
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import App from "./App";

export default function Home() {
  return (
    <Theme>
      <App />
    </Theme>
  );
}
