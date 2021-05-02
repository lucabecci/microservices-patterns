export function getToken(): string{
    const token = process.env.SERVERS_TOKEN || "335825cc-d85b-42f1-bad6-3852d934e6f1"
    return token
}