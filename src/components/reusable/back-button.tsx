import { useEffect } from "react"
import { backButton } from "@telegram-apps/sdk"
import { useSignal } from "@telegram-apps/sdk-react"


const BackButton = () => {

    const isVisible = useSignal(backButton.isVisible)

    useEffect(() => {
        console.log('The button is', isVisible ? 'visible' : 'invisible');
    }, [isVisible])

    useEffect(() => {
        backButton.show();

        return () => {
            backButton.hide();
        }
    }, [])

  return null
}

export default BackButton