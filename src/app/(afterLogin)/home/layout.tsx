import { ReactElement } from "react";

export default async function HomeLayout({ children }): Promise<ReactElement> {
  return (
    <div>
      홈 레이아웃
      {children}
    </div>
  );
}
