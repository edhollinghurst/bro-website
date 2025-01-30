import { NextResponse } from "next/server"
import mailchimp from "@mailchimp/mailchimp_marketing"

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
})

export async function POST(request: Request) {
  const { firstName, lastName, email } = await request.json()

  if (!email || !firstName || !lastName) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 })
  }

  try {
    await mailchimp.lists.addListMember(process.env.MAILCHIMP_LIST_ID!, {
      email_address: email,
      status: "subscribed",
      merge_fields: {
        FNAME: firstName,
        LNAME: lastName,
      },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error subscribing to Mailchimp", error)
    return NextResponse.json({ error: "Error subscribing to the newsletter" }, { status: 500 })
  }
}

