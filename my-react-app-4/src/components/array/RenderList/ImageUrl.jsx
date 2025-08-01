// imgId = "001"
// scientist/img001.png
// "scientist/img" + imgId + ".png"

export function getImageUrl(person) {
  return "scientist/img" + person.imgId + ".png";
}
