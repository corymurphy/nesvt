// just pretend this doesn't exist, i'm not using momentjs 🙈
export default function parseDate(input: string): Date {
  if (input.length == 10) {
    return new Date(input + "T00:00:00.000")
  }
  return new Date(input)
}
