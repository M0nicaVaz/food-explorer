import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

const SearchContext = createContext({});

function SearchContextProvider({ children }) {
    const [search, setSearch] = useState()

    return (
        <SearchContext.Provider value={{ search, setSearch }}>
            {children}
        </SearchContext.Provider>
    );
}

function useSearch() {
    const context = useContext(SearchContext);

    return context;
}

export { SearchContextProvider, useSearch, SearchContext };