import { createContext, Dispatch, SetStateAction, useState } from "react";

type ControllProviderTypes = {
  counter: number,
  setCounter: Dispatch<SetStateAction<number>>,
}

export const ControllContext = createContext<ControllProviderTypes>({} as ControllProviderTypes);


export function ControllProvider({children}: any){
  const [counter, setCounter] = useState(0);
  return(
    <ControllContext.Provider value={{counter, setCounter}}>
      {children}
    </ControllContext.Provider>
  )
}