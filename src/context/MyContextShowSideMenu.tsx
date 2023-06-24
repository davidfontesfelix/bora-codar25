import React, { createContext, useState } from 'react'

type MyContextType = {
  show: boolean
  setShow: React.Dispatch<React.SetStateAction<boolean>>
}

type MyContextProviderProps = {
  children: React.ReactNode
}

const MyContextShowSideMenu = createContext<MyContextType>({
  show: true,
  setShow: () => {},
})

export const MyContextSideMenuProvider: React.FC<MyContextProviderProps> = ({
  children,
}) => {
  const [show, setShow] = useState<boolean>(false)

  return (
    <MyContextShowSideMenu.Provider value={{ show, setShow }}>
      {children}
    </MyContextShowSideMenu.Provider>
  )
}

export default MyContextShowSideMenu
