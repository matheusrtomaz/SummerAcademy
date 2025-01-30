import style from "./Main.module.css";
// import { VisitasProvider } from "../../context/VisitasProvider";

export function Main({children}) {
  return (
    <div className={style.container}>
      <div className={style.content}>
        {children}
      </div>
    </div>
  );
}