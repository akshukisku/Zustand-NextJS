"use client"

import { useTheme } from "next-themes"
import { Button } from "./ui/button"
import { Moon, Sun } from "lucide-react"


const ToggleTheme = () => {
    const { theme,setTheme }=useTheme()
  return (
    <Button className="rounded-full p-4 " onClick={()=>setTheme( theme === "dark" ? "light" : "dark")}>
        {theme === "dark" ? <Sun/> : <Moon/>}
    </Button>
  )
}

export default ToggleTheme