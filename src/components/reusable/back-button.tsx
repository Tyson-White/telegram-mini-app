import { useEffect } from "react"
import { backButton } from "@telegram-apps/sdk"


const BackButton = () => {

    // const isVisible = useSignal(backButton.isVisible)

    useEffect(() => {
        backButton.show();

        return () => {
            backButton.hide();
        }
    }, [])

  return null
}

export default BackButton