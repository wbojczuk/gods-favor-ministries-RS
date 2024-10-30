import Minister from "@/app/(mainsite)/components/homepage/Minister/Minister"
import PageTitle from "@/app/(mainsite)/components/misc/PageTitle/PageTitle"
import TeamMembers from "@/app/(mainsite)/components/staffpage/TeamMembers/TeamMembers"
import type { Metadata } from "next"

export const metadata: Metadata = {
	  title: `Staff | ${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
	  description: `Staff | ${process.env.NEXT_PUBLIC_WEBSITE_DESC}`,
openGraph: {
title: `${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
description: `${process.env.NEXT_PUBLIC_WEBSITE_DESC}`,
type: "website",
images: [
{
url: `${process.env.NEXT_PUBLIC_OPENGRAPH_IMAGE_LINK}`,
width: 1280,
height: 720,
}
]
},
twitter: {
card: 'summary_large_image',
title: `${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
description: `${process.env.NEXT_PUBLIC_WEBSITE_DESC}`,
 images: [`${process.env.NEXT_PUBLIC_OPENGRAPH_IMAGE_LINK}`]
}
}

export default function StaffPage(){
	 return(
	 	 <>
			<PageTitle pageTitle="Staff" />
			<TeamMembers />
			<Minister />
	 	 </>
	 )
}