import type { MetaFunction } from "@remix-run/node";
import Sidebar from "../components/Sidebar/Sidebar"
import Body from "../components/Body/Body"

export const meta: MetaFunction = () => {
  return [
    { title: "Search" },
    { name: "description", content: "Search description!" },
  ];
};

export default function Search() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Search</h1>
		<Sidebar />
		<Body />
    </div>
  );
}
