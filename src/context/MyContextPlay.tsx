import React, { createContext, useState } from 'react'

type MyContextType = {
  playOrPause: boolean
  setPlayOrPause: React.Dispatch<React.SetStateAction<boolean>>
}

type MyContextProviderProps = {
  children: React.ReactNode
}

const MyContextPlayOrPause = createContext<MyContextType>({
  playOrPause: false,
  setPlayOrPause: () => {},
})

export const MyContextPlayProvider: React.FC<MyContextProviderProps> = ({
  children,
}) => {
  const [playOrPause, setPlayOrPause] = useState<boolean>(false)

  return (
    <MyContextPlayOrPause.Provider value={{ playOrPause, setPlayOrPause }}>
      {children}
    </MyContextPlayOrPause.Provider>
  )
}

export default MyContextPlayOrPause
