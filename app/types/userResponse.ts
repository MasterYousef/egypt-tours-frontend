import user from "./user"

interface userResponse {
    status:string,
    data?:user,
    token?:string
}
export default userResponse