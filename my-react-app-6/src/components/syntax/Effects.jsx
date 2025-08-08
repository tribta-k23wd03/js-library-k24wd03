import { useEffect } from "react";

function Effects() {
  useEffect(() => {
    // code ở đây sẽ được chạy sau mỗi lần commit.
  });
  return <div>Effects</div>;
}

export default Effects;
