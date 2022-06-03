import { toast } from 'react-toastify'

const useNotification = () => {
    const success = (message: string) => {
        toast.success(message)
    }

    const warning = (message: string) => {
        toast.warning(message)
    }

    const info = (message: string) => {
        toast.info(message)
    }

    const error = (message: string) => {
        toast.error(message)
    }
    
    return {
        success,
        warning,
        info,
        error,
    }
}

export default useNotification
