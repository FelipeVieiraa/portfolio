import { createContext, ReactNode, useEffect, useState } from "react";

export const DataContext = createContext({} as contextProps);

type Perfil = {
    avatar_url: string;
}

export type Repos = {
    id: number;
    name: string;
    description: string;
    url: string;
    homepage: string;
}

type Info = {
    perfil: Perfil;
    repos: Repos;
}

interface contextProps {
    info: Info;
}

interface providerProps {
    children: ReactNode;
    perfil: Perfil;
    repos: Repos;
}

export default function DataProvider({ children, ...rest }: providerProps) {
        
    const info: Info = {
        perfil: rest.perfil,
        repos: rest.repos
    }

    return(
        <DataContext.Provider value={{ info }}>
            {children}
        </DataContext.Provider>
    );
}