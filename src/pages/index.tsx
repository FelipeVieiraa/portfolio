import { GetServerSideProps } from "next";

import Home from "../components/Home";
import Header from '../components/Header';
import DataProvider from "../contexts/data";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import MyWork from "../components/MyWork";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

export default function MyPortfolio({ perfil, repos }) {
  return (
    <>
      <DataProvider perfil={perfil} repos={repos}>
        <Header />
        <Home />
        <About />
        <Portfolio />
        <MyWork />
        <Skills />
        <Footer />
      </DataProvider>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const github = await fetch('https://api.github.com/users/felipevieiraa');
  const githubRepos = await fetch('https://api.github.com/users/felipevieiraa/repos');

  const perfil = await github.json();
  const repos = await githubRepos.json();

  return (
    {
      props: {
        perfil,
        repos
      }
    }
  );
}
