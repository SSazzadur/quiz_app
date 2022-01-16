import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import { QuizProvider } from "../contexts/QuizContext";

function MyApp({ Component, pageProps }) {
  return (
    <QuizProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QuizProvider>
  );
}

export default MyApp;
