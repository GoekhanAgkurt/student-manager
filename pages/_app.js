import GlobalStyle from "../styles";
import useLocalStorageState from "use-local-storage-state";
import { initialStudents } from "@/lib/data";

export default function App({ Component, pageProps }) {

  const [students, setStudents] = useLocalStorageState("students", { defaultValue: initialStudents });




  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} students={students} />
    </>
  );
}
