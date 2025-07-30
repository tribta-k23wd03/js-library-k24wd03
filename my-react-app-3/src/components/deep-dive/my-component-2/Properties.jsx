import Avatar from "./Avatar";
import Card from "./Card";

export default function Properties() {
  return (
    <Card>
      <Avatar size={100} person={{ name: "kitty", imageId: "62oTtBu" }} />
    </Card>
  );
}
