import AccountPage from './account-form'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export default async function Account() {
  const supabase = createServerComponentClient({ cookies })

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    // Handle the case when user is not logged in
    // For example, redirect to login page or show an error message
    return <div>Please log in to view this page.</div>
  }

  return <AccountPage user={user} />
}