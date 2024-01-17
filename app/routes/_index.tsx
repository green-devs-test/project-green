import type { MetaFunction } from "@remix-run/node";
import Sidebar from "../components/Sidebar/Sidebar"
import Body from "../components/Body/Body"

export const meta: MetaFunction = () => {
  return [
    { title: "Home" },
    { name: "description", content: "Home description!" },
  ];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Home</h1>
      <Sidebar />
      <Body />
    </div>
  );
}
