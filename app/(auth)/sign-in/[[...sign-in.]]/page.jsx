import { SignIn } from "@clerk/nextjs";
 import { Style } from "./stye.css";
 
export default function Page() {
  return <div style={{backgroundColor:'aliceblue'}}><SignIn  /></div>;
}