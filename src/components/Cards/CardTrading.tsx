import { HoverEffect } from "../ui/card-hover-effect";

export function CardTrading() {
  return (
    <div className="w-full">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "profile",
    description: "profile description ",
  },
  {
    title: "wallet",
    description: "view tokens and transactions description by wallet address",
  },
  {
    title: "transactions",
    description: "view your tokens and transactions description",
  },
];
