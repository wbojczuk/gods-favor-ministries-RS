import BibleVerse from "@/app/(mainsite)/components/homepage/BibleVerse/BibleVerse";
import Header from "@/app/(mainsite)/components/homepage/Header/Header";
import Minister from "@/app/(mainsite)/components/homepage/Minister/Minister";
import Place from "@/app/(mainsite)/components/homepage/Place/Place";
import ServiceTimes from "@/app/(mainsite)/components/homepage/ServiceTimes/ServiceTimes";
import Visit from "@/app/(mainsite)/components/homepage/Visit/Visit";
import WhatWeBelieve from "@/app/(mainsite)/components/homepage/WhatWeBelieve/WhatWeBelieve";


export default function Home() {
  return (
    <>
      <Header />
      <ServiceTimes />
      <Place />
      <WhatWeBelieve />
      <Minister />
      <BibleVerse />
      <Visit />
    </>
  )
}
