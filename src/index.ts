const top3Words = (input: string): Array<string> => {
  // TypeScript is unsound :(
  if (typeof input === 'string') {
    // TODO sanitize
    // 
    return []
  }
  else {
    throw new Error('Please input a string to process and return the top 3 words!')
  }
}

export default top3Words