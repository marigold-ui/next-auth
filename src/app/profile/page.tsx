// 'use client';
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'
import { authOptions } from "@/app/shared/auth";

const Page = async () => {
    const session = await getServerSession(authOptions)
    if (!session) {
        redirect('/signin?callbackUrl=/profile')
    }
    console.log("session", session)
    return (
        <section className='py-24'>
            <div className='container'>
                <h1 className='text-2xl font-bold'>Profile</h1>
            </div>
        </section>
    )
}

export default Page