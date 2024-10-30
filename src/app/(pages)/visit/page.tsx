import ServiceTimes from "@/app/(mainsite)/components/homepage/ServiceTimes/ServiceTimes"
import PageTitle from "@/app/(mainsite)/components/misc/PageTitle/PageTitle"
import VisitContent from "@/app/(mainsite)/components/visitpage/VisitContent/VisitContent"
import type { Metadata } from "next"

export const metadata: Metadata = {
	  title: `Visit | ${process.env.NEXT_PUBLIC_WEBSITE_TITLE}`,
	  description: `Visit | ${process.env.NEXT_PUBLIC_WEBSITE_DESC}`,
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

export default function VisitPage(){
	 return(
	 	 <>
			<PageTitle pageTitle="Visit" />
			<VisitContent />
			<ServiceTimes />
	 	 </>
	 )
}