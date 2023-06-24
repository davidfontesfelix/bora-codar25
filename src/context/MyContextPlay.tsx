import React, { createContext, useState } from 'react'

type MyContextType = {
  playOrPause: boolean
  setPlayOrPause: React.Dispatch<React.SetStateAction<boolean>>
}

type MyContextProviderProps = {
  children: React.ReactNode
}

const MyContext = createContext<MyContextType>({
  playOrPause: false,
  setPlayOrPause: () => {},
})

export const MyContextProvider: React.FC<MyContextProviderProps> = ({
  children,
}) => {
  const [playOrPause, setPlayOrPause] = useState<boolean>(false)

  return (
    <MyContext.Provider value={{ playOrPause, setPlayOrPause }}>
      {children}
    </MyContext.Provider>
  )
}

export default MyContext
