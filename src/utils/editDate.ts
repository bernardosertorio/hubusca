export function editDate(stringToTransform: string) {
  const arrayOfStrings = stringToTransform.split('T');
  let date = arrayOfStrings[0].split('-');
  date = date.reverse();
  const string = `${date[0]}/${date[1]}/${date[2]}`;
  return (string);
}