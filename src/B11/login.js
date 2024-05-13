import { useState } from "react";
import  LogoutBtn  from "../B11/Button"
import LoginBtn from "../B11/ButtonLogin"
function ActionLogin() {
    const [isToogle, setIsToogle] = useState(false)

    function handleButtonLogin() {
        setIsToogle(!isToogle)
    }

    function handleButtonLogout() {
        setIsToogle(!isToogle)
    }

    function renderButton() {
        let btn
        if (!isToogle) {
            btn = <LogoutBtn onClick={handleButtonLogout}></LogoutBtn>
        } else {
            btn = <LoginBtn onClick={handleButtonLogin}></LoginBtn>
        }
    }
    return (
        <>
            {
                renderButton()
            }
        </>
    )
}
export default ActionLogin;