import { GsapProvider } from "./gsap.provider";

export const MainProvider = ({ children }: { children: React.ReactNode }) => {
  return <GsapProvider>{children}</GsapProvider>
};