const bootstrapColors = [
    "primary",
    "secondary",
    "success",
    "info",
    "warning",
    "danger",
    "dark"
]

export default function getRandomColor() {
    return bootstrapColors[Math.floor(Math.random()*7)]
}
