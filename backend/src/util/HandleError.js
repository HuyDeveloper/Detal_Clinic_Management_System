export async function getErrorMessage(error) {
    if (error instanceof Error) return error.message;
    return (error);
}

export default getErrorMessage;