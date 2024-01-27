type GreetProps = {
    name: string,
    message: string
}

export default function Greet({name, message}: GreetProps) {
    return (
        <div>
            <h2>Welcome {name} ! {message}</h2>
        </div>
    )
}