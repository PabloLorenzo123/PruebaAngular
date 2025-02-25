export type User = {
    username: string,
    password: string,
    email: string,
    firstName: string | null,
    lastName: string | null,
    profilePic: string | null | '' | File,
}