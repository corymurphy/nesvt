export function monthShort(date: Date) {
    var formatter = new Intl.DateTimeFormat("en-US", { month: "short" }).format;
    return formatter(date);
}
