type GreetProps = {
    name: string,
    message: string,
    isLoggedIn: boolean
}

export default function Greet({name, message, isLoggedIn}: GreetProps) {
    return (
        <div>
            <h2> {isLoggedIn ?` Welcome ${name} ! ${message }` : "Hello, Please Log in To Continue"}</h2>
        </div>
    )
}