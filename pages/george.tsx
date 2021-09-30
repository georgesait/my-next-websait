import { useEffect, useState } from "react";

export default function KudosToGeorge() {
  const [kudos, giveKudos] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      giveKudos(kudo => kudo + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1>Kudos for George: {kudos}</h1>
  )
}