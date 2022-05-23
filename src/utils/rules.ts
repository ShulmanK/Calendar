export const rules = {
    required: (message: string) => {
        return {
            required: true,
            message
        }
    },
    phoneFormat: (message: string) => {
        return {pattern: /^\d{3}$/, message}
    }
}
